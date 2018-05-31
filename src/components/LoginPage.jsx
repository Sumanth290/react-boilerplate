import React from "react";
import {connect} from "react-redux";
import {startLogin} from "../actions/auth";

export const LoginPage = (props) => (
    <div className="box-layout">
        {/* <h1>Please login to continue</h1> */}
        <div className="box-layout__fade">
            <div className="box-layout__title">
                <p className="box-layout__heading">Boilerplate</p>
                <p className="box-layout__text">Tag line for app.</p>
            </div>
            <div className="box-layout__box">
                <button className="box-layout__button" onClick={props.startLogin}>
                    Login with 
                    <img className="box-layout__buttonimg" src="/media/Google.png" alt="Google" />
                </button>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin : () => dispatch(startLogin())
});

export default connect(undefined,mapDispatchToProps)(LoginPage);