import React from "react";

const PokemonProfileItem = ({ title, value }) => (
  <div className="row">
    <div className="col-7 col-md-8">
      <h5>{title}</h5>
    </div>
    <div className="col-5 col-md-4">
      <h5>{value}</h5>
    </div>
  </div>
);

export default PokemonProfileItem;
