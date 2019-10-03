import React, { useState } from "react";
import { Link } from "react-router-dom";
const IMG_URL = "/assets/sprites/";
//"https://github.com/pokeapi/sprites/blob/master/sprites/pokemon/";

const PokemonCard = ({ name, id }) => {
  const loadingImagePath = "assets/imageLoading.gif";
  const [loading, setLoading] = useState(true);

  return (
    <div className="col-md-3 mb-5">
      <div className="card text-center">
        <Link className="text-dark link" to={`/pokemon/${id}`}>
          <h5 className="card-title mt-3">{name}</h5>
          <div className="card-body">
            <div className="image-container">
              <img
                className="image"
                src={loading ? loadingImagePath : `${IMG_URL}${id}.png`}
                alt={name}
                onLoad={() => setLoading(false)}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
