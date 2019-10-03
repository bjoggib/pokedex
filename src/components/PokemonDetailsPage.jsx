import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";

import { getPokemonByNameOrId } from "../redux/actions/pokemonActions";
import LoadingIndicator from "./LoadingIndicator";

const HomePage = ({ match, getPokemonByNameOrId, pokemon }) => {
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
      </Fragment>
    );
  }
  return <LoadingIndicator />;
};

const mapStateToProps = ({ pokemon }) => ({
  pokemon: pokemon.chosenPokemon
});

const mapDispatchToProps = { getPokemonByNameOrId };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
