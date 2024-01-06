import React from "react";
import "./navigation.css";
import realmsWhite from "../Images/logos/realmsWhite.png";

export const Navigations = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <img src={realmsWhite} alt="Realms logo written in white" />
      </div>
      <div className="items">
        <ul>
          <a href="/"><li>About</li></a>
          <a href="/"><li>Events</li></a>
          <a href="/resources"><li>Resources</li></a>
        </ul>
      </div>
      <div className="right">
        <div className="right-login"><a href="/login"><p>Login</p></a></div>
        <div className="language">En</div>
      </div>
    </div>
  );
};