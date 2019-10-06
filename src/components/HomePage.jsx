import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";

import { getAllPokemon, getMyPokeDex } from "../redux/actions/pokemonActions";
import PokemonCardList from "./PokemonCardList";
import LoadingIndicator from "./LoadingIndicator";
import SearchBar from "./SearchBar";
import { getIdFromUrl } from "../helpers/utils";
import { noResponseFromServer } from "../helpers/toastFunctions";

const HomePage = ({ getAllPokemon, getMyPokeDex, pokemon }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [stopIndex, setstopIndex] = useState(20);
  const POKEMON_PER_PAGE = 20;

  useEffect(() => {
    const fetchPokemon = () => {
      getAllPokemon().catch(() => noResponseFromServer());
      getMyPokeDex().catch(() => noResponseFromServer());
    };
    if (pokemon.length === 0) {
      fetchPokemon();
    }
  }, []);

  const showLoadMorePokemonButton = () => {
    if (stopIndex < pokemon.length && searchTerm.length === 0) {
      return (
        <button
          className="btn btn-lg mb-3"
          onClick={() => setstopIndex(stopIndex + POKEMON_PER_PAGE)}
        >
          Load More Pokemon
        </button>
      );
    }
  };

  const handleInputChange = e => setSearchTerm(e.target.value);

  const isSearchMatch = p =>
    p.name.toLowerCase().startsWith(searchTerm) || p.id.startsWith(searchTerm);

  const renderPokemonList = () => {
    if (searchTerm.trim().length > 0) {
      const searchResults = pokemon.filter(isSearchMatch);
      return <PokemonCardList pokemonList={searchResults} emptyListClasses="no-search-results" />;
    }
    return <PokemonCardList pokemonList={pokemon.slice(0, stopIndex)} />;
  };

  if (pokemon.length > 0) {
    return (
      <Fragment>
        <SearchBar searchTerm={searchTerm} handleChange={handleInputChange} />
        <div className="row justify-content-center">{renderPokemonList()}</div>
        <div className="row justify-content-center">{showLoadMorePokemonButton()}</div>
      </Fragment>
    );
  }
  return <LoadingIndicator />;
};

const mapStateToProps = ({ pokemon }) => ({
  pokemon: pokemon.pokemonList.map(p => ({ ...p, id: getIdFromUrl(p.url) }))
});

const mapDispatchToProps = { getAllPokemon, getMyPokeDex };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
