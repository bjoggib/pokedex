import axios from "axios";

import {
  GET_POKEMON,
  GET_POKEMON_BY_ID,
  SAVE_TO_MY_POKEMON,
  DELETE_FROM_MY_POKEMON,
  GET_MY_POKEDEX,
  RESET_CHOSEN_POKEMON
} from "./actionTypeConstants";

const ROOT_URL = "https://pokeapi.co/api/v2/pokemon";

const getAllPokemon = () => async dispatch => {
  try {
    const result = await axios.get(`${ROOT_URL}ff?limit=900`);
    dispatch({ type: GET_POKEMON, payload: result.data });
  } catch (error) {
    throw error;
  }
};

const getPokemonById = nameOrId => async dispatch => {
  try {
    const pokemonDetails = await axios.get(`${ROOT_URL}/${nameOrId}`);
    const speciesDetails = await axios.get(`${ROOT_URL}-species/${nameOrId}`);
    const result = { ...pokemonDetails.data, ...speciesDetails.data };
    dispatch({ type: GET_POKEMON_BY_ID, payload: result });
  } catch (error) {
    throw error;
  }
};

const savePokemon = (name, id) => async dispatch => {
  try {
    const result = await axios.post("/myPokeDex", { name, id });
    dispatch({ type: SAVE_TO_MY_POKEMON, payload: result.data });
  } catch (error) {
    throw error;
  }
};

const deletePokemon = id => async dispatch => {
  try {
    await axios.delete(`/myPokeDex/${id}`);
    dispatch({ type: DELETE_FROM_MY_POKEMON, payload: id });
  } catch (error) {
    throw error;
  }
};

const getMyPokeDex = () => async dispatch => {
  try {
    const result = await axios.get(`/myPokeDex`);
    dispatch({ type: GET_MY_POKEDEX, payload: result.data });
  } catch (error) {
    throw error;
  }
};

const resetChosenPokemon = () => async dispatch => {
  dispatch({ type: RESET_CHOSEN_POKEMON, payload: null });
};

export {
  getAllPokemon,
  getPokemonById,
  savePokemon,
  deletePokemon,
  getMyPokeDex,
  resetChosenPokemon
};
