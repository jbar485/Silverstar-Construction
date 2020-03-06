import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section about"></div>
        <div className="footer-section links"></div>
        <div className="footer-section contact-form"></div>
      </div>
      <div className="footer-bottom">
        &copy; 2020 silverstarconstruction.com | Designed by Judah Barton
      </div>
    </div>
  );
}

export default Footer;
