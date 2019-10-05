import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";

import {
  getPokemonByNameOrId,
  savePokemon,
  deletePokemon,
  getMyPokeDex
} from "../redux/actions/pokemonActions";
import { renderButton } from "../helpers/componentUtils";
import LoadingIndicator from "./LoadingIndicator";

const PokemonDetailsPage = ({
  match,
  getPokemonByNameOrId,
  getMyPokeDex,
  savePokemon,
  deletePokemon,
  pokemon,
  myPokeDex
}) => {
  useEffect(() => {
    const id = match.params.id;
    const fetchPokemonById = () => getPokemonByNameOrId(id);
    fetchPokemonById();
    getMyPokeDex();
  }, []);

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
        {renderButton(pokemon.id, pokemon.name, myPokeDex)}
      </Fragment>
    );
  }
  return <LoadingIndicator />;
};

const mapStateToProps = ({ pokemon }) => ({
  pokemon: pokemon.chosenPokemon,
  myPokeDex: pokemon.myPokeDex
});

const mapDispatchToProps = {
  getPokemonByNameOrId,
  savePokemon,
  deletePokemon,
  getMyPokeDex
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetailsPage);
