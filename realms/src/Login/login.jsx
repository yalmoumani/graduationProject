import React from "react";
import "./login.css";
import { Navigations } from "../Navbar/navigation";
import Footer from "../Footer/footer";

export const Login = () => {
  return (
    <div className="login-container">
      <Navigations />
      <div className="login-content">
        <h2>Login</h2>
        <form action="POST">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter Student ID" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p>Or Sign In with Microsoft</p>
      </div>
      <Footer />
    </div>
  );
};

