import React from "react"
import logo from "./confi-logo-new2.png"
import "./css/LoginStyles.css"
import googleLogo from "./google-logo.png"
import { Link } from "react-router-dom"
//import { Label } from "recharts";
//import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from 'react-router-dom'
import Register from './Register'

function Login() {
    

  /*const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };*/
  return (
    <div className="container-new">
      <div className="header1">
        <img src={logo} />
      </div>
      <form className="login-container">
        <div className="heading">
          <h1>Log In</h1>
          <label>Don't have an account? </label>         
          <Link to="/register"> Sign Up</Link>
        </div>
        <div className="main-form">
          <div className="left-div">
            {/*<label for="username">Username</label>
            <input type="text" id="username" />
            <label for="password">Password</label>
            <input type="password" id="Password" />*/}
            <div className="form-floating mb-1">    
              <input
                type="name"
                className="form-control"
                id="floatingInput"
                placeholder="Username/Email"
              />
              <label for="floatingInput">Username</label>
            </div>
            <div className="form-floating mb-1">    
              <input
                type="password"
                className="form-control"
                id="floatingInput"
                placeholder="Enter Password"
              />
              <label for="floatingInput">Password</label>
            </div>
          </div>
          <div className="vertical"></div>
          <div className="right-div">
            <div className="button-google">
              <img src={googleLogo} />
              <button>Continue with Google</button>
            </div>
            <div className="button-login">
              <button>Continue with Email</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
