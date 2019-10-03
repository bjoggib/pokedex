import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";

import { getAllPokemon } from "../redux/actions/pokemonActions";
import PokemonCardList from "./PokemonCardList";
import SearchBar from "./SearchBar";
const HomePage = ({ getAllPokemon, pokemon }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [stopIndex, setstopIndex] = useState(20);

  useEffect(() => {
    const fetchPokemon = () => getAllPokemon();
    if (pokemon.length === 0) {
      fetchPokemon();
    }
  }, []);

  const showLoadMorePokemonButton = () => {
    if (stopIndex < pokemon.length && searchTerm.length === 0) {
      return (
        <button
          className="btn mb-3"
          type="button"
          onClick={() => setstopIndex(stopIndex + 20)}
        >
          Load More Pokemon
        </button>
      );
    }
  };

  const handleInputChange = e => setSearchTerm(e.target.value);

  const isSearchMatch = p =>
    p.name.toLowerCase().startsWith(searchTerm) || p.id === searchTerm;

  const renderPokemonList = () => {
    if (searchTerm.trim().length > 0) {
      const filteredPokemonList = pokemon.filter(isSearchMatch);
      return <PokemonCardList pokemonList={filteredPokemonList} />;
    }
    return <PokemonCardList pokemonList={pokemon.slice(0, stopIndex)} />;
  };
  return (
    <Fragment>
      <div className="row justify-content-center">
        <SearchBar searchTerm={searchTerm} handl Change={handleInputChange} />
      </div>
      <div className="row">{renderPokemonList()}</div>
      <div className="row justify-content-center">
        {showLoadMorePokemonButton()}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ pokemon }) => ({
  pokemon: pokemon.pokemonList.map(p => ({ ...p, id: getIdFromUrl(p.url) }))
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
)(HomePage);
