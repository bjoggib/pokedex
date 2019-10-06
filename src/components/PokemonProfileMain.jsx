import React from "react";
import PokemonProfileItem from "./PokemonProfileItem";

const PokemonProfileMain = ({ sectionName, profileDict }) => (
  <div className="col-12 col-md-6">
    <div className="row">
      <h2 className="col">
        <u>{sectionName}</u>
      </h2>
    </div>
    {Object.keys(profileDict).map(pv => (
      <PokemonProfileItem title={pv} value={profileDict[pv]} />
    ))}
  </div>
);

export default PokemonProfileMain;
