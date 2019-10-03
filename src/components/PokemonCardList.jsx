import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonCardList = ({ pokemonList }) => {
  if (pokemonList.length > 0) {
    return pokemonList.map(p => (
      <PokemonCard key={p.name} name={p.name} id={p.id} />
    ));
  }
  return (
    <div className="col-sm-12 col-md-6 offset-md-4">
      <h2>Sorry, We Found No Results</h2>
    </div>
  );
};

export default PokemonCardList;
