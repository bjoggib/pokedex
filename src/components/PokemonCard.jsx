import React from "react";

const IMG_URL =
  "https://github.com/pokeapi/sprites/blob/master/sprites/pokemon/";

const PokemonCard = ({ name, id, url }) => {
  return (
    <div className="col-md-3">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <img src={`/assets/sprites/${id}.png`} alt={name} />

          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
