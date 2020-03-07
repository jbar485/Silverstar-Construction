import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/homes">Homes</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="logo">
        <Link to="/">
          <img
            className="logo"
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
