import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";

import {
  resetChosenPokemon,
  getPokemonById,
  savePokemon,
  deletePokemon,
  getMyPokeDex
} from "../redux/actions/pokemonActions";
import Button from "./common/Button";
import LoadingIndicator from "./LoadingIndicator";
import PokemonProfileItem from "./PokemonProfileItem";

const PokemonDetailsPage = ({
  match,
  getPokemonById,
  getMyPokeDex,
  resetChosenPokemon,
  savePokemon,
  pokemon,
  myPokeDex
}) => {
  useEffect(() => {
    const id = match.params.id;
    const fetchPokemonById = () => getPokemonById(id);
    fetchPokemonById();
    getMyPokeDex();

    return () => resetChosenPokemon();
  }, []);

  const getGenderRate = genderRate => {
    const femaleRate = (100 / 8) * genderRate;
    const maleRate = 100 - femaleRate;
    return [femaleRate, maleRate];
  };

  if (pokemon) {
    console.log("herna", pokemon);
    return (
      <Fragment>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-4">
                    <h2>
                      <u># {pokemon.id}</u>
                    </h2>
                  </div>
                  <div className="col">
                    <div className="float-right">
                      <Button
                        text="Add To My PokeDex"
                        handleClick={() => savePokemon(pokemon.name, pokemon.id)}
                        classes="btn"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col col-md-12">
                    <div className="row">
                      <h5 className="px-3">
                        {
                          pokemon.flavor_text_entries.find(t => t.language.name === "en")
                            .flavor_text
                        }
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
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                      />
                    </div>
                  </div>

                  <div className="col-md-8">
                    <div className="row">
                      <h2 className="col">
                        <u>Statistics</u>
                      </h2>
                    </div>
                    {renderStats(pokemon.stats)}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <h2 className="col">
                        <u>Profile</u>
                      </h2>
                    </div>
                    <PokemonProfileItem title="Height" value={pokemon.height} />
                    <PokemonProfileItem title="Weight" value={pokemon.weight} />
                    <PokemonProfileItem title="Capture Rate" value={pokemon.capture_rate} />
                    <PokemonProfileItem title="Color" value={pokemon.color.name} />
                    <PokemonProfileItem title="Hatch Counter" value={pokemon.hatch_counter} />
                    <PokemonProfileItem title="Habitat" value={pokemon.habitat.name} />

                    <div className="row">
                      <div className="col-md-4">
                        <h5>Gender Ratio</h5>
                      </div>
                      <div className="col-md-3">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${getGenderRate(pokemon.gender_rate)[0]}%`,
                              backgroundColor: "#c2185b"
                            }}
                            aria-valuenow="15"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <small>{getGenderRate(pokemon.gender_rate)[0]}%</small>
                          </div>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${getGenderRate(pokemon.gender_rate)[1]}%`,
                              backgroundColor: "#1976d2"
                            }}
                            aria-valuenow="30"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <small>{getGenderRate(pokemon.gender_rate)[1]}%</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <h2 className="col">
                            <u>Abilties</u>
                          </h2>
                        </div>
                        {pokemon.abilities.map(a => (
                          <PokemonProfileItem
                            key={a.ability.name}
                            title={a.ability.name}
                            value=""
                          />
                        ))}
                      </div>

                      <div className="col-md-6">
                        <div className="row">
                          <h2 className="col">
                            <u>Types</u>
                          </h2>
                        </div>
                        {pokemon.types.map(t => (
                          <PokemonProfileItem key={t.type.name} title={t.type.name} value="" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  getPokemonById,
  savePokemon,
  deletePokemon,
  getMyPokeDex,
  resetChosenPokemon
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetailsPage);

const renderStats = stats =>
  stats.map(stat => (
    <div className="row">
      <div className="col-12 col-md-3">{stat.stat.name}</div>
      <div className="col-12 col-md-9">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressBar"
            style={{ width: `${stat.base_stat}%` }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <small>{stat.base_stat}%</small>
          </div>
        </div>
      </div>
    </div>
  ));
