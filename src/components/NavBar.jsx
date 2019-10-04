import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar fixed-top">
    <Link className="navbar-brand" to="/">
      <img src="/assets/pokeball.png" alt="pokeball" />
    </Link>
    <Link className="btn" to="/mypokedex">
      My PokeDex
    </Link>
  </nav>
);

export default NavBar;
