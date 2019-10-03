import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonCardList = ({ pokemonList }) =>
  pokemonList.map(p => <PokemonCard key={p.name} name={p.name} id={p.id} />);

export default PokemonCardList;
