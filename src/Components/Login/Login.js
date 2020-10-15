import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory, useLocation } from "react-router-dom";
import firebaseConfig from "./firebaseConfig";

import "./Login.css";
import google from "../../images/logos/google.png";
import logo from "../../images/logos/logo.png";
import { UserContext } from "../../App";

const Login = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/ordersubmitform" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedUser(signedInUser);
        storeAuthToken();
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };
  return (
    <div className="login-page container">
      <Link to="/">
        {" "}
        <img className="login-logo" src={logo} alt="" />
      </Link>
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="from-group mt-5 google-form">
          {" "}
          <h3>Login</h3>
          <div className="google-image">
            <img src={google} alt="" />
            <button className="btn btn-brand" onClick={handleGoogleSignIn}>
              Google Sign in
            </button>
          </div>
          <p>
            Don't have an account?{" "}
            <span
              style={{
                color: "rgb(255,166,0)",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Create an account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
