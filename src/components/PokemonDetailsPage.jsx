import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";

import {
  getPokemonByNameOrId,
  savePokemon,
  deletePokemon,
  getMyPokeDex
} from "../redux/actions/pokemonActions";
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

  const renderButtons = () => {
    console.log("renderButton", myPokeDex, myPokeDex.find(p => p.id === 66));
    return myPokeDex.find(p => p.id === pokemon.id) ? (
      <Button
        text="Delete From My PokeDex"
        handleClick={() => deletePokemon(pokemon)}
      />
    ) : (
      <Button
        text="Save To My PokeDex"
        handleClick={() => savePokemon(pokemon)}
      />
    );
  };

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
        {renderButtons()}
      </Fragment>
    );
  }
  return <LoadingIndicator />;
};

const Button = ({ text, handleClick }) => (
  <button className="btn" onClick={handleClick}>
    {text}
  </button>
);

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
