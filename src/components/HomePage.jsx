import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";

import {
  getAllPokemon,
  getNextPageOfPokemon
} from "../redux/actions/pokemonActions";
import PokemonCard from "./PokemonCard";

const HomePage = ({
  getNextPageOfPokemon,
  getAllPokemon,
  pokemon,
  nextPage
}) => {
  useEffect(() => {
    const fetchPokemon = () => getAllPokemon();
    if (pokemon.length === 0) {
      fetchPokemon();
    }
  }, []);

  const showLoadMorePokemonButton = () =>
    nextPage && (
      <button type="button" onClick={() => getNextPageOfPokemon(nextPage)}>
        Load More Pokemon
      </button>
    );

  return (
    <Fragment>
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
      <div className="row">{showLoadMorePokemonButton()}</div>
    </Fragment>
  );
};

const mapStateToProps = ({ pokemon }) => ({
  pokemon: pokemon.pokemonList.map(p => ({ ...p, id: getIdFromUrl(p.url) })),
  nextPage: pokemon.nextPage
});

const mapDispatchToProps = { getAllPokemon, getNextPageOfPokemon };

const getIdFromUrl = url => {
  const urlParts = url.split("/");
  const id = urlParts[urlParts.length - 2];
  return id;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
