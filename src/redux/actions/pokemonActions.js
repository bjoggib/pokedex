import axios from "axios";

import { GET_ALL_POKEMON, GET_POKEMON_BY_NAME } from "./actionTypeConstants";

const ROOT_URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";

const getAllPokemonSuccess = payload => ({
  type: GET_ALL_POKEMON,
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

const getPokemonByName = name => async dispatch => {
  try {
    const result = await axios.get(`${ROOT_URL}/${name}`);
    dispatch(getPokemonByNameSuccess(result.data));
  } catch (error) {
    console.log(error);
  }
};

export { getAllPokemon, getPokemonByName };
