import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";

import {
  getPokemonByNameOrId,
  savePokemon,
  deletePokemon
} from "../redux/actions/pokemonActions";
import LoadingIndicator from "./LoadingIndicator";

const HomePage = ({
  match,
  getPokemonByNameOrId,
  savePokemon,
  deletePokemon,
  pokemon
}) => {
  useEffect(() => {
    const id = match.params.id;
    const fetchPokemonById = () => getPokemonByNameOrId(id);
    fetchPokemonById();
  }, []);

  console.log("I chose:", pokemon);

  if (pokemon) {
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-6">
            <h3>{pokemon.name}</h3>
            {pokemon.abilities.map(a => (
              <p key={a.ability.name}>{a.ability.name}</p>
            ))}
          </div>
        </div>
        <button className="btn" onClick={() => savePokemon(pokemon)}>
          Save to my pokemon
        </button>
        <button className="btn" onClick={() => deletePokemon(pokemon)}>
          Delete from my pokemon
        </button>
      </Fragment>
    );
  }
  return <LoadingIndicator />;
};

const mapStateToProps = ({ pokemon }) => ({
  pokemon: pokemon.chosenPokemon
});

const mapDispatchToProps = { getPokemonByNameOrId, savePokemon, deletePokemon };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
