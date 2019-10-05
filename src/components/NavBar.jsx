import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
    <div className="navbar-collapse">
      <NavLink activeClassName="selected-link" className="nav-link" to="/" exact>
        <img className="pokeball-icon" src="/assets/pokeball.png" alt="pokeball" />
        <span className="nav-item-text">Home</span>
      </NavLink>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>

      <NavLink activeClassName="selected-link" className="nav-link " to="/mypokedex">
        <span className="nav-item-text">My PokeDex</span>
        <img className="pokedex-icon" src="/assets/icon.png" alt="pokeball" />
      </NavLink>
    </div>
  </nav>
);

export default NavBar;
