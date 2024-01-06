import React from "react";
import "./main.css";
import { Navigations } from "../Navbar/navigation";
import Footer from "../Footer/footer";
import Students from "../Images/logos/students.jpg";

export const DesktopMainPage = () => {
  return (
    <div className="desktop-main-page">
      <Navigations />
      <div className="main">
        <p>Where<br />  Learning <br /> is <br />Made <br /> Easy</p>
        <img src={Students} alt="" />
      </div>
      <div className="previews">
        <div className="boxes">
          <p>Diverse</p>
        </div>
        <div className="boxes">
          <p>Accessible</p>
        </div>
        <div className="boxes">
          <p>Responsive</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};