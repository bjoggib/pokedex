import React from "react";

const PokemonProfileDescription = ({ pokemon }) => (
  <div className="row">
    <div className="col-md-4">
      <div className="row">
        <img
          className="rounded mx-auto d-block mt-2"
          src={`/assets/sprites/${pokemon.id}.png`}
          alt={pokemon.name}
        />
      </div>
    </div>
    <div className="col-md-8">
      <div className="row">
        <h5 className="px-3">
          {pokemon.flavor_text_entries.find(t => t.language.name === "en").flavor_text}
        </h5>
      </div>
    </div>
  </div>
);

export default PokemonProfileDescription;
