import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
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
                  <Link to="/about">Our Story</Link>
                </li>
                <li>
                  <Link to="/homes">Our Work</Link>
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
            src="https://heathenbrewing.com/wp-content/uploads/2017/10/heathen-tiki.png"
            alt="logo"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
