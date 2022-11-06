import React from "react";
import "./navLinks.css";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          All Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/uid1/places">All Places</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">Add New Places</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Authenticate</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
