import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonCardList = ({ pokemonList, emptyListMessage }) => {
  if (pokemonList.length > 0) {
    return pokemonList.map(p => (
      <PokemonCard key={p.name} name={p.name} id={p.id} />
    ));
  }
  return <div className="message-image">{emptyListMessage}</div>;
};

export default PokemonCardList;
