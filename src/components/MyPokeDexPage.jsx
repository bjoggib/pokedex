import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMyPokeDex } from "../redux/actions/pokemonActions";
import PokemonCardList from "./PokemonCardList";

const emptyPokeDexImage = <img src="/assets/emptyPokeDexImage.png" alt="emptyPokedex" />;
const MyPokeDexPage = ({ myPokeDex, getMyPokeDex }) => {
  useEffect(() => {
    const fetchPokemon = () => getMyPokeDex();
    if (myPokeDex.length === 0) {
      fetchPokemon();
    }
  }, []);

  console.log("pokeDex:", myPokeDex);
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
