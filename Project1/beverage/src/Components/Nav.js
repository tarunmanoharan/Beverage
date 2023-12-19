import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginlogo from "../assets/logo/login.svg";
import "../assets/css/nav.css";

function Nav() {
  return (
    <nav className="header-area">
      <ul className="nav-links">

        <li className="center">
          <Link to="/">
            <b>Bevarage</b>
          </Link>
        </li>

        <li className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
          />
        </li>

        <li className="logo">
          <Link to="/login">
            <img src={loginlogo} alt="Logo" style={{ width: '40px', height: '40px' }} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
