import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as pokemonActions from "../redux/actions/pokemonActions";
import Button from "./common/Button";
import LoadingIndicator from "./LoadingIndicator";
import * as utils from "../helpers/utils";
import { saveToPokeDexError, saveToPokeDexSuccess } from "../helpers/toastFunctions";
import PokeCardHeader from "./PokeCardHeader";
import ErrorImageMessage from "./ErrorImageMessage";
import PokemonStatistics from "./PokemonStatistics";
import PokemonProfileSub from "./PokemonProfileSub";
import PokemonProfileMain from "./PokemonProfileMain";
import PokemonProfileDescription from "./PokemonProfileDescription";

const PokemonDetailsPage = ({ match, actions, pokemon, myPokeDex, profileDict }) => {
  const [detailsNotFound, setDetailsNotFound] = useState(false);

  useEffect(() => {
    const fetchPokemonById = () => {
      actions.getPokemonById(match.params.id).catch(err => setDetailsNotFound(true));
      actions.getMyPokeDex();
    };
    fetchPokemonById();

    return () => actions.resetChosenPokemon();
    //eslint-disable-next-line
  }, []);

  const getAbilities = () => pokemon.abilities.map(a => a.ability.name);
  const getTypes = () => pokemon.types.map(t => t.type.name);

  const renderSaveButton = () => {
    if (utils.isInMyPokeDex(myPokeDex, pokemon.id)) {
      return null;
    }

    return (
      <Button
        classes="btn"
        text="Add To My PokeDex"
        handleClick={() =>
          actions
            .savePokemon(pokemon.name, pokemon.id)
            .then(() => saveToPokeDexSuccess(pokemon.name))
            .catch(() => saveToPokeDexError(pokemon.name))
        }
      />
    );
  };

  if (detailsNotFound) {
    return <ErrorImageMessage classes="details-not-found" />;
  }

  if (pokemon) {
    return (
      <div className="row">
        <div className="col">
          <div className="card mb-4">
            <PokeCardHeader id={pokemon.id} name={pokemon.name} button={renderSaveButton()} />
            <hr />
            <div className="card-body">
              <PokemonProfileDescription pokemon={pokemon} />
              <hr />
              <PokemonStatistics pokemon={pokemon} />
              <hr />
              <div className="row">
                <PokemonProfileMain sectionName="Profile" profileDict={profileDict} />
                <div className="col-md-6">
                  <div className="row">
                    <PokemonProfileSub sectionName="Abilities" data={getAbilities()} />
                    <PokemonProfileSub sectionName="Types" data={getTypes()} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <LoadingIndicator />;
};

const mapStateToProps = ({ pokemon }) => {
  const profileDict = {};
  if (pokemon.chosenPokemon) {
    const { chosenPokemon } = pokemon;
    profileDict["Height"] = `${utils.fromDmToCm(chosenPokemon.height)} cm`;
    profileDict["Weight"] = `${utils.fromHgtoKg(chosenPokemon.weight)} kg`;
    profileDict["Capture Rate"] = `${utils.getCaptureRate(chosenPokemon.capture_rate)} %`;
    profileDict["Color"] = chosenPokemon.color ? chosenPokemon.color.name : "N/A";
    profileDict["Hatch Counter"] = chosenPokemon.hatch_counter;
    profileDict["Habitat"] = chosenPokemon.habitat ? chosenPokemon.habitat.name : "N/A";
    profileDict["Genders"] = utils.getGenders(pokemon.chosenPokemon.gender_rate);
  }
  return {
    pokemon: pokemon.chosenPokemon,
    myPokeDex: pokemon.myPokeDex,
    profileDict
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(pokemonActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetailsPage);
