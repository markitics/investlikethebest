import React from "react";
import { NavLink } from "react-router-dom";

function navBar(props) {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/episode/181">Listen</NavLink>
      </li>
      <li>
        <NavLink to="/posts">Posts</NavLink>
      </li>
      <li>
        <NavLink to="/admin">Admin</NavLink>
      </li>
    </ul>
  );
}

export default navBar;
