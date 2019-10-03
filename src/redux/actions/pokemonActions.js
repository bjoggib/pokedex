import axios from "axios";

import { GET_POKEMON, GET_POKEMON_BY_NAME } from "./actionTypeConstants";

const ROOT_URL = "https://pokeapi.co/api/v2/pokemon";

const getAllPokemonSuccess = payload => ({
  type: GET_POKEMON,
  payload
});

const getPokemonByNameSuccess = payload => ({
  type: GET_POKEMON_BY_NAME,
  payload
});

const getAllPokemon = () => async dispatch => {
  try {
    const result = await axios.get(ROOT_URL);
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

export { getAllPokemon, getPokemonByNameOrId, getNextPageOfPokemon };
