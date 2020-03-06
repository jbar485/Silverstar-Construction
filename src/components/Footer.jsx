import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src={logo}
            alt="Silverstar construction logo"
            className="footer-logo"
          />
        </div>
        <div className="footer-pages">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Our Story</Link>
          </li>
          <li>
            <Link to="/homes">Our Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
        <div className="footer-links">
          <li>
            <a href="https://www.facebook.com/judahnathaniel.barton" target="_blank">
              <img
                src={facebook}
                alt="Facebook Link"
                className="facebook"
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/judahnathaniel.barton" target="_blank">
              <img
                src={instagram}
                alt="Instagram Link"
                className="instagram"
              />
            </a>
          </li>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2020 silverstarconstruction.com | Designed by Judah Barton
      </div>
    </div>
  );
}

export default Footer;
