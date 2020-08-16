import React from "react";
import { NavLink, Link } from "react-router-dom";
// Could also import Nav, Navbar, NavItem, as on
// https://serverless-stack.com/chapters/adding-links-in-the-navbar.html

function navBar(props) {
  return (
    <nav className="navbar navbar-expand sticky-top navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink key="1" className="nav-link" to="/episode/181">
            Listen
          </NavLink>
          <NavLink key="2" className="nav-link" to="/about">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default navBar;
