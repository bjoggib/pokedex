import axios from "axios";

import {
  GET_POKEMON,
  GET_POKEMON_BY_NAME,
  SAVE_TO_MY_POKEMON,
  DELETE_FROM_MY_POKEMON
} from "./actionTypeConstants";

const ROOT_URL = "https://pokeapi.co/api/v2/pokemon";

const getAllPokemonSuccess = payload => ({
  type: GET_POKEMON,
  payload
});

const getPokemonByNameSuccess = payload => ({
  type: GET_POKEMON_BY_NAME,
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
    const result = await axios.get(`${ROOT_URL}/${nameOrId}`);
    dispatch(getPokemonByNameSuccess(result.data));
  } catch (error) {
    console.log(error);
  }
};

const getNextPageOfPokemon = nextPageUrl => async dispatch => {
  try {
    const result = await axios.get(nextPageUrl);
    console.log("result:", result);
    dispatch(getAllPokemonSuccess(result.data));
  } catch (error) {
    console.log(error);
  }
};

const savePokemon = ({ name, id }) => async dispatch => {
  try {
    const result = await axios.post("/myPokemon", { name, id });
    console.log("result:", result);
    dispatch(savePokemonSuccess(result.data));
  } catch (error) {
    console.log(error);
  }
};

const deletePokemon = ({ id }) => async dispatch => {
  console.log("HERE");
  try {
    const result = await axios.delete(`/myPokemon/${id}`);
    console.log("result:", result);
    dispatch(deletePokemonSuccess(id));
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllPokemon,
  getPokemonByNameOrId,
  getNextPageOfPokemon,
  savePokemon,
  deletePokemon
};
