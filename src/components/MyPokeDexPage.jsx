import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMyPokeDex } from "../redux/actions/pokemonActions";
import PokemonCardList from "./PokemonCardList";
import LoadingIndicator from "./LoadingIndicator";

const MyPokeDexPage = ({ myPokeDex, getMyPokeDex }) => {
  useEffect(() => {
    const fetchPokemon = () => getMyPokeDex();
    if (myPokeDex.length === 0) {
      fetchPokemon();
    }
    //eslint-disable-next-line
  }, []);

  if (myPokeDex) {
    return (
      <div className="row justify-content-center">
        <PokemonCardList pokemonList={myPokeDex} emptyListClasses="empty-pokedex" />
      </div>
    );
  }
  return <LoadingIndicator />;
};

const mapStateToProps = ({ pokemon }) => {
  return { myPokeDex: pokemon.myPokeDex };
};

const mapDispatchToProps = { getMyPokeDex };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPokeDexPage);
