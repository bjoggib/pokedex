import React from "react";
import ProgressBar from "./ProgressBar";

const PokemonStatistics = ({ pokemon }) => (
  <div className="row">
    <div className="col">
      <div className="row">
        <h2 className="col">
          <u>Statistics</u>
        </h2>
      </div>
      {pokemon.stats.map(s => (
        <ProgressBar key={s.stat.name} stat={s.stat} baseStat={s.base_stat} />
      ))}
    </div>
  </div>
);

export default PokemonStatistics;
