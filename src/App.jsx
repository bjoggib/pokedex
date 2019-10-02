import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getAllPokemon } from "./redux/actions/pokemonActions";
import "./App.css";

const App = ({ getAllPokemon, pokemon }) => {
  useEffect(() => {
    getAllPokemon();
    console.log("The pokemon:", pokemon);
  }, []);

  return <div className="App">Initial Test</div>;
};

const mapStateToProps = ({ pokemon }) => ({ pokemon });

const mapDispatchToProps = { getAllPokemon };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
