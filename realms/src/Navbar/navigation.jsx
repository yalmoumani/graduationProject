import React from "react";
import "./navigation.css";
import realmsWhite from "../Images/logos/realmsWhite.png";

export const Navigations = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <img src={realmsWhite} alt="" />
      </div>
      <div className="items">
        <ul>
          <a href="/"><li>Announcements</li></a>
          <a href="/"><li>Resources</li></a>
        </ul>
      </div>
      <div className="right">
        <a href="/login"><p>Login</p></a>
        <div className="language">En</div>
      </div>
    </div>
  );
};