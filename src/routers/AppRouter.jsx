import React from "react";
import {Router,Route,Switch} from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import DashboardPage from "../components/DashboardPage.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import LoginPage from "../components/LoginPage.jsx";
import PrivateRoute from "../routers/PrivateRoute.jsx";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={DashboardPage}/>
                {/* <Route path="/help" component={HelpPage}/>  */}
                <PrivateRoute component={ErrorPage}/>   
            </Switch>
        </div>
    </Router>
);

export default AppRouter;