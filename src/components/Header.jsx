import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <div className="links">
        <Link to="/about">Our Story</Link> | <Link to="/contact">Contact</Link> | <Link to="/homes">Our Work</Link>
      </div>
      <div className="topBackground">
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
