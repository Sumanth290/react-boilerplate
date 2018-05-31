import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { login,logout,initialPath } from "./actions/auth";
import AppRouter,{history} from "./routers/AppRouter.jsx";
import {firebase} from "./firebase/firebase";
import "normalize.css/normalize.css";
import "./styles/myCSS.scss";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {setInitPath} from "./actions/auth";
import LoadingPage from "./components/LoadingPage.jsx";

const store = configureStore();
setInitPath(history.location.pathname);

const main = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<LoadingPage />,document.getElementById("app"));


let isRendered = false;

const renderApp = () => {
    if(!isRendered){
        ReactDOM.render(main,document.getElementById("app"));
        isRendered = true;
    }
};

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log("uid",user.uid);
        store.dispatch(login(user.uid));
        renderApp();
        if(initialPath === "/"){
            history.push("/dashboard");
        }else {
            history.push(initialPath);
        }
    }else{
        store.dispatch(logout());
        renderApp();
        history.push("/");
    }
});


