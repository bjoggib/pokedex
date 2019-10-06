import React from "react";
import PokemonCard from "./PokemonCard";
import ErrorImageMessage from "./ErrorImageMessage";

const PokemonCardList = ({ pokemonList, emptyListClasses }) => {
  if (pokemonList.length > 0) {
    return pokemonList.map(p => <PokemonCard key={p.name} name={p.name} id={p.id} />);
  }
  return <ErrorImageMessage classes={emptyListClasses} />;
};

export default PokemonCardList;
