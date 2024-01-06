import React from "react";
import "./login.css";
import realmsWhite from "../Images/logos/realmsWhite.png";

const Circle = ({ id }) => {
  return <div id={id} className="circle"></div>;
};

export const Login = () => {
  return (
    // container for logo
    <div className="login-container">
      <Circle id="circle1" />   
      <Circle id="circle2" />   
      <Circle id="circle3" />   
      <Circle id="circle4" />   
      <Circle id="circle5" />   
      <Circle id="circle6" />   
      
      <div className="logo">
        <a href="/">
          <img src={realmsWhite} alt="Logo for ReaLMS" />
        </a>
      </div>
      
      <div className="signin-container">
      <div className="login-content">
      <h1 className="title">Sign In</h1>
        <form action="POST">
          <div className="form-group">
            <input type="text" id="username" placeholder="Student ID" />
          </div>
          <div className="form-group">
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div><a href="/">
            <p>Forgot Password?</p>
          </a>
          </div>
          
          <div className="middle-container">  
          <div>
          <div className="form-check">
            <input className="form-check-input"
              type="checkbox"
              value="remember"
              id=""
            />
            <label className="form-check-label" htmlFor="RememberMe">
              Remember Me
            </label>
            </div> 
            </div>
            <div>
          <button type="submit" id="signin">
            Login
          </button>
         
          </div>
          </div>
        
           
        </form>
        <div className="or-container">
          <hr className="or-line" />
          <span className="or-text">Or</span>
          <hr className="or-line" />
        </div>
        <button id="microsoft">Login With Microsoft</button>
      </div>
    </div>
    </div>
  );
};