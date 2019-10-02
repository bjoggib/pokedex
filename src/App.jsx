import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getAllPokemon } from "./redux/actions/pokemonActions";
import PokemonCard from "./components/PokemonCard";

const App = ({ getAllPokemon, pokemon }) => {
  useEffect(() => {
    const fetchPokemon = () => getAllPokemon();
    fetchPokemon();
  }, []);

  return (
    <div className="container">
      {pokemon.map(pokemon => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ pokemon }) => {
  return { pokemon };
};

const mapDispatchToProps = { getAllPokemon };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
