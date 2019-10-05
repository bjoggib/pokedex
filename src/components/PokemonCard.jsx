import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { savePokemon, deletePokemon } from "../redux/actions/pokemonActions";
import { renderButton } from "../helpers/componentUtils";
import { formatString } from "../helpers/utils";

const IMG_URL = "/assets/sprites/";
const LOADING_IMG = "assets/imageLoading.gif";

const PokemonCard = ({ name, id, myPokeDex, savePokemon, deletePokemon }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="col-md-3 mb-5 text-center">
      <div className="card ">
        <Link className="link" to={`/pokemon/${id}`}>
          <h5 className="card-title mt-3">{formatString(name)}</h5>
          <div className="image-outer-container"></div>
          <div className="image-container">
            <img
              className="image"
              src={loading ? LOADING_IMG : `${IMG_URL}${id}.png`}
              alt={name}
              onLoad={() => setLoading(false)}
            />
          </div>
        </Link>
        <div className="bottom-card" />
      </div>
      {renderButton(id, name, myPokeDex, savePokemon, deletePokemon)}
    </div>
  );
};

const mapStateToProps = ({ pokemon }) => ({
  myPokeDex: pokemon.myPokeDex
});

const mapDispatchToProps = { savePokemon, deletePokemon };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonCard);
