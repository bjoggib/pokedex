import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
    <div className=" navbar-collapse" id="navbarTogglerDemo01">
      <Link className="nav-link navbar-brand" to="/">
        <img src="/assets/pokeball.png" alt="pokeball" />
        <span className="nav-item-text">Home</span>
      </Link>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>

      <Link className="nav-link navbar-brand " to="/mypokedex">
        <span className="nav-item-text">My PokeDex</span>
        <img src="/assets/icon.png" alt="pokeball" />
      </Link>
    </div>
  </nav>

  // <nav className="navbar sticky-top navbar-dark">
  //   <Link className="nav-link navbar-brand" to="/">
  //     <img src="/assets/pokeball.png" alt="pokeball" />
  //     <span className="nav-item-text">Home</span>
  //   </Link>

  //   <Link className="nav-link navbar-brand mt-3" to="/mypokedex">
  //     <span className="nav-item-text">My PokeDex</span>
  //     <img src="/assets/icon.png" alt="pokeball" />
  //   </Link>
  // </nav>
);

export default NavBar;
