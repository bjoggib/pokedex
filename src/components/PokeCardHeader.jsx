import React from "react";

const PokeCardHeader = ({ pokeIndex, button }) => (
  <div className="card-header">
    <div className="row">
      <div className="col-4">
        <h2>
          <u># {pokeIndex}</u>
        </h2>
      </div>
      <div className="col">
        <div className="float-right">{button}</div>
      </div>
    </div>
  </div>
);

export default PokeCardHeader;
