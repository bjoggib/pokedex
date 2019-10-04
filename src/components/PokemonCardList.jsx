import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonCardList = ({ pokemonList, emptyListMessage }) => {
  if (pokemonList.length > 0) {
    return pokemonList.map(p => (
      <PokemonCard key={p.name} name={p.name} id={p.id} />
    ));
  }
  return (
    <div className="col-sm-12 col-md-6 offset-md-2 mt-4">
      {emptyListMessage}
    </div>
  );
};

export default PokemonCardList;
