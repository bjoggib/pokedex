import React, { useState } from "react";

const IMG_URL =
  "https://github.com/pokeapi/sprites/blob/master/sprites/pokemon/";

const PokemonCard = ({ name, id, url }) => {
  const loadingImagePath = "assets/imageLoading.gif";
  const [loading, setLoading] = useState(true);
  return (
    <div className="col-md-3 mb-5">
      <div className="card">
        <div className="card-body">
          <div className="image-container">
            <img
              className="image"
              src={loading ? loadingImagePath : `${IMG_URL}${id}.png?raw=true`}
              alt={name}
              onLoad={() => setLoading(false)}
            />
          </div>

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
