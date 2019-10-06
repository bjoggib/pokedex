import axios from "axios";

import * as types from "./actionTypeConstants";

const ROOT_URL = "https://pokeapi.co/api/v2/pokemon";

export const getAllPokemon = () => async dispatch => {
  try {
    const result = await axios.get(`${ROOT_URL}?limit=900`);
    dispatch({ type: types.GET_POKEMON, payload: result.data });
  } catch (error) {
    throw error;
  }
};

export const getPokemonById = nameOrId => async dispatch => {
  try {
    const pokemonDetails = await axios.get(`${ROOT_URL}/${nameOrId}`);
    const speciesDetails = await axios.get(`${ROOT_URL}-species/${nameOrId}`);
    const result = { ...pokemonDetails.data, ...speciesDetails.data };
    dispatch({ type: types.GET_POKEMON_BY_ID, payload: result });
  } catch (error) {
    throw error;
  }
};

export const savePokemon = (name, id) => async dispatch => {
  try {
    const result = await axios.post("/myPokeDex", { name, id });
    dispatch({ type: types.SAVE_TO_MY_POKEMON, payload: result.data });
  } catch (error) {
    throw error;
  }
};

export const deletePokemon = id => async dispatch => {
  try {
    await axios.delete(`/myPokeDex/${id}`);
    dispatch({ type: types.DELETE_FROM_MY_POKEMON, payload: id });
  } catch (error) {
    throw error;
  }
};

export const getMyPokeDex = () => async dispatch => {
  try {
    const result = await axios.get(`/myPokeDex`);
    dispatch({ type: types.GET_MY_POKEDEX, payload: result.data });
  } catch (error) {
    throw error;
  }
};

export const resetChosenPokemon = () => async dispatch => {
  dispatch({ type: types.RESET_CHOSEN_POKEMON, payload: null });
};
