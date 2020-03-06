import React from "react";
import logo from "../images/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section-logo">
          <img src={logo} alt="Silverstar construction logo" className="footer-logo"/>
        </div>
        <div className="footer-section-pages"></div>
        <div className="footer-section-links"></div>
      </div>
      <div className="footer-bottom">
        &copy; 2020 silverstarconstruction.com | Designed by Judah Barton
      </div>
    </div>
  );
}

export default Footer;
