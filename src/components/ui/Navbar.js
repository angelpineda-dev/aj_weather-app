import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Weather App</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="navlink">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className="navlink">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
