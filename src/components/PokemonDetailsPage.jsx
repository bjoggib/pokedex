import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as pokemonActions from "../redux/actions/pokemonActions";
import Button from "./common/Button";
import LoadingIndicator from "./LoadingIndicator";
import PokemonProfileItem from "./PokemonProfileItem";
import {
  isInMyPokeDex,
  fromDmToCm,
  fromHgtoKg,
  getGenders,
  getCaptureRate
} from "../helpers/utils";
import { saveToPokeDexError, saveToPokeDexSuccess } from "../helpers/toastFunctions";
import ProgressBar from "./ProgressBar";
import PokeCardHeader from "./PokeCardHeader";

const PokemonDetailsPage = ({ match, actions, pokemon, myPokeDex, profileValues }) => {
  const [detailsNotFound, setDetailsNotFound] = useState(false);
  useEffect(() => {
    const fetchPokemonById = () => {
      actions.getPokemonById(match.params.id).catch(err => setDetailsNotFound(true));
      actions.getMyPokeDex();
    };
    fetchPokemonById();

    return () => actions.resetChosenPokemon();
  }, []);

  const reunderProfileSection = (sectionName, data) => (
    <div className="col-md-6">
      <div className="row">
        <h2 className="col">
          <u>{sectionName}</u>
        </h2>
      </div>
      {data.map(value => (
        <PokemonProfileItem key={value} title={value} />
      ))}
    </div>
  );
  const renderSaveButton = () => {
    if (isInMyPokeDex(myPokeDex, pokemon.id)) {
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

  const renderStats = () => (
    <div className="col-md-8">
      <div className="row">
        <h2 className="col">
          <u>Statistics</u>
        </h2>
      </div>
      {pokemon.stats.map(s => (
        <ProgressBar key={s.stat.name} stat={s.stat} baseStat={s.base_stat} />
      ))}
    </div>
  );

  const renderProfile = () => (
    <div className="col-12 col-md-6">
      <div className="row">
        <h2 className="col">
          <u>Profile</u>
        </h2>
      </div>
      {Object.keys(profileValues).map(pv => (
        <PokemonProfileItem title={pv} value={profileValues[pv]} />
      ))}
    </div>
  );

  if (detailsNotFound) {
    console.log("her");
    return (
      <div className="row">
        <div className="message-image">
          <div className="col page-not-found background-image" />
        </div>
      </div>
    );
  }
  if (pokemon) {
    return (
      <div className="row">
        <div className="col">
          <div className="card mb-4">
            <PokeCardHeader pokeIndex={pokemon.id} button={renderSaveButton()} />
            <div className="card-body">
              <div className="row">
                <div className="col col-md-12">
                  <div className="row">
                    <h5 className="px-3">
                      {pokemon.flavor_text_entries.find(t => t.language.name === "en").flavor_text}
                    </h5>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-4">
                  <div className="row">
                    <h2 className="col text-center">
                      <u>{pokemon.name}</u>
                    </h2>
                  </div>
                  <div className="row">
                    <img
                      className="rounded mx-auto d-block mt-2"
                      src={`/assets/sprites/${pokemon.id}.png`}
                      alt={pokemon.name}
                    />
                  </div>
                </div>
                {renderStats()}
              </div>
              <hr />
              <div className="row">
                {renderProfile()}
                <div className="col-md-6">
                  <div className="row">
                    {reunderProfileSection("Abilities", pokemon.abilities.map(a => a.ability.name))}
                    {reunderProfileSection("Types", pokemon.types.map(t => t.type.name))}
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
  const profileValues = {};
  if (pokemon.chosenPokemon) {
    profileValues["Height"] = `${fromDmToCm(pokemon.chosenPokemon.height)} cm`;
    profileValues["Weight"] = `${fromHgtoKg(pokemon.chosenPokemon.weight)} kg`;
    profileValues["Capture Rate"] = `${getCaptureRate(pokemon.chosenPokemon.capture_rate)} %`;
    profileValues["Color"] = pokemon.chosenPokemon.color.name;
    profileValues["Hatch Counter"] = pokemon.chosenPokemon.hatch_counter;
    profileValues["Habitat"] = pokemon.chosenPokemon.habitat.name;
    profileValues["Genders"] = getGenders(pokemon.chosenPokemon.gender_rate);
  }
  return {
    pokemon: pokemon.chosenPokemon,
    myPokeDex: pokemon.myPokeDex,
    profileValues
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(pokemonActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetailsPage);
