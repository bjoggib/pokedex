import axios from "axios";

import {
  GET_POKEMON,
  GET_POKEMON_BY_NAME,
  SAVE_TO_MY_POKEMON,
  DELETE_FROM_MY_POKEMON,
  GET_MY_POKEDEX
} from "./actionTypeConstants";

const ROOT_URL = "https://pokeapi.co/api/v2/pokemon";
//api/v2/pokemon-species/{id or name}/
const getAllPokemonSuccess = payload => ({
  type: GET_POKEMON,
  payload
});

const getPokemonByNameSuccess = payload => ({
  type: GET_POKEMON_BY_NAME,
  payload
});

const getMyPokeDexSuccess = payload => ({
  type: GET_MY_POKEDEX,
  payload
});

const savePokemonSuccess = payload => ({
  type: SAVE_TO_MY_POKEMON,
  payload
});

const deletePokemonSuccess = payload => ({
  type: DELETE_FROM_MY_POKEMON,
  payload
});

const getAllPokemon = () => async dispatch => {
  try {
    const result = await axios.get(`${ROOT_URL}?limit=900`);
    dispatch(getAllPokemonSuccess(result.data));
  } catch (error) {
    console.log(error);
  }
};

const getPokemonByNameOrId = nameOrId => async dispatch => {
  try {
    const pokemonDetails = await axios.get(`${ROOT_URL}/${nameOrId}`);
    const speciesDetails = await axios.get(`${ROOT_URL}-species/${nameOrId}`);
    const result = { ...pokemonDetails.data, ...speciesDetails.data };
    console.log("result:", result);
    dispatch(getPokemonByNameSuccess(result));
  } catch (error) {
    console.log(error);
  }
};

const savePokemon = (name, id) => async dispatch => {
  console.log("saving", name, id);
  try {
    const result = await axios.post("/myPokeDex", { name, id });
    dispatch(savePokemonSuccess(result.data));
  } catch (error) {
    console.log(error);
  }
};

const deletePokemon = id => async dispatch => {
  try {
    await axios.delete(`/myPokeDex/${id}`);
    dispatch(deletePokemonSuccess(id));
  } catch (error) {
    console.log(error);
  }
};

const getMyPokeDex = () => async dispatch => {
  try {
    const result = await axios.get(`/myPokeDex`);
    dispatch(getMyPokeDexSuccess(result.data));
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllPokemon,
  getPokemonByNameOrId,
  savePokemon,
  deletePokemon,
  getMyPokeDex
};
