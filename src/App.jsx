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
      <div className="row">
        {pokemon.map(pokemon => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            id={pokemon.id}
            url={pokemon.url}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ pokemon }) => ({
  pokemon: pokemon.map(p => ({ ...p, id: getIdFromUrl(p.url) }))
});

const mapDispatchToProps = { getAllPokemon };

const getIdFromUrl = url => {
  const urlParts = url.split("/");
  const id = urlParts[urlParts.length - 2];
  return id;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
