import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link navbar-brand" to="/">
            <img src="/assets/pokeball.png" alt="pokeball" />
            <span className="nav-item-text">Home</span>
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link navbar-brand mt-3" to="/mypokedex">
            <span className="nav-item-text">My PokeDex</span>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

{
  /* const NavBar = () => (
  <nav className="navbar fixed-top">
    <Link className="navbar-brand" to="/">
      <img src="/assets/pokeball.png" alt="pokeball" />
    </Link>
    <Link className="link" to="/mypokedex">
      My PokeDex
      <img src="/assets/icon.png" alt="pokedex" />
    </Link>
  </nav>
); */
}

export default NavBar;
