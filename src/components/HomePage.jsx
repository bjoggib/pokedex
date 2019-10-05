import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";

import { getAllPokemon, getMyPokeDex } from "../redux/actions/pokemonActions";
import PokemonCardList from "./PokemonCardList";
import LoadingIndicator from "./LoadingIndicator";
import SearchBar from "./SearchBar";
import { toast } from "react-toastify";
import { errorStyles } from "../helpers/toastStyles";

const HomePage = ({ getAllPokemon, getMyPokeDex, pokemon }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [stopIndex, setstopIndex] = useState(20);

  useEffect(() => {
    const fetchPokemon = () => {
      getAllPokemon().catch(() => toast.error(errorMessage, errorStyles));
      getMyPokeDex().catch(() => toast.error(errorMessage, errorStyles));
    };
    const errorMessage = "The server is not responding. Please try to refresh the page";
    if (pokemon.length === 0) {
      fetchPokemon();
    }
  }, []);

  const showLoadMorePokemonButton = () => {
    if (stopIndex < pokemon.length && searchTerm.length === 0) {
      return (
        <button className="btn mb-3" onClick={() => setstopIndex(stopIndex + 20)}>
          Load More Pokemon
        </button>
      );
    }
  };

  const handleInputChange = e => setSearchTerm(e.target.value);

  const isSearchMatch = p => p.name.toLowerCase().startsWith(searchTerm) || p.id === searchTerm;

  const noSearchResultsMessage = <div className="col no-search-results background-image " />;

  const renderPokemonList = () => {
    if (searchTerm.trim().length > 0) {
      const filteredPokemonList = pokemon.filter(isSearchMatch);
      return (
        <PokemonCardList
          pokemonList={filteredPokemonList}
          emptyListMessage={noSearchResultsMessage}
        />
      );
    }
    return <PokemonCardList pokemonList={pokemon.slice(0, stopIndex)} />;
  };

  if (pokemon.length > 0) {
    return (
      <Fragment>
        <div className="row justify-content-center">
          <SearchBar searchTerm={searchTerm} handleChange={handleInputChange} />
        </div>
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

const getIdFromUrl = url => {
  const urlParts = url.split("/");
  const id = urlParts[urlParts.length - 2];
  return id;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
