import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMyPokeDex } from "../redux/actions/pokemonActions";
import PokemonCardList from "./PokemonCardList";

const emptyPokeDexImage = <div className="col empty-pokedex background-image" />;
const MyPokeDexPage = ({ myPokeDex, getMyPokeDex }) => {
  useEffect(() => {
    const fetchPokemon = () => getMyPokeDex();
    if (myPokeDex.length === 0) {
      fetchPokemon();
    }
  }, []);

  if (myPokeDex) {
    return (
      <div className="row justify-content-center">
        <PokemonCardList pokemonList={myPokeDex} emptyListMessage={emptyPokeDexImage} />
      </div>
    );
  }
  return <p>Loading</p>;
};

const mapStateToProps = ({ pokemon }) => {
  return { myPokeDex: pokemon.myPokeDex };
};

const mapDispatchToProps = { getMyPokeDex };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPokeDexPage);
