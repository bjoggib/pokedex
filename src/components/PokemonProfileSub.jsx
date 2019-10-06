import React from "react";
import PokemonProfileItem from "./PokemonProfileItem";

const PokemonProfileSub = ({ sectionName, data }) => (
  <div className="col-md-6">
    <div className="row">
      <h2 className="col">
        <u>{sectionName}</u>
      </h2>
    </div>
    {data.map(value => (
      <PokemonProfileItem key={value} title={value} />
    ))}
  </div>
);

export default PokemonProfileSub;
