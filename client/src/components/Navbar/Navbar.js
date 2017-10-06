// Imports dependencies
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="nav-extended main-nav">
    <div className="nav-wrapper">
      {/* Webpage Logo */}
      <Link className="brand-logo" to="/">
        The NY Times Article Scraper
      </Link>

      {/* Mobile: Creates burger icon */}
      <a href="#" data-activates="mobile-demo" className="button-collapse">
        <i className="material-icons">menu</i>
      </a>

      {/* Right side Navbar links */}
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li 
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "active"
              : ""
          }
        >
          <Link to="/">Home</Link>
        </li>
        <li 
          className={
            window.location.pathname === "/saved" ? "active" : ""
          }
        >
          <Link to="/saved">Saved</Link>
        </li>
        <li 
          className={
            window.location.pathname === "/repo" 
              ? "active" 
              : ""
          }
        >
          <Link to="/repo">Repo</Link>
        </li>
      </ul>

      {/* Mobile: Navbar links */}
      <ul className="side-nav" id="mobile-demo">
        <li 
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "active"
              : ""
          }
        >
          <Link to="/">Home</Link>
        </li>
        <li 
          className={
            window.location.pathname === "/saved" ? "active" : ""
          }
        >
          <Link to="/saved">Saved</Link>
        </li>
        <li 
          className={
            window.location.pathname === "/repo" 
              ? "active" 
              : ""
          }
        >
          <Link to="/repo">Repo</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;