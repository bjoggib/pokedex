import axios from "axios";

import { GET_ALL_POKEMON } from "./actionTypeConstants";

const ROOT_URL = "https://pokeapi.co/api/v2/pokemon";

const getAllPokemonSuccess = payload => ({ type: GET_ALL_POKEMON, payload });

const getAllPokemon = () => async dispatch => {
  try {
    const result = await axios.get(ROOT_URL);
    dispatch(getAllPokemonSuccess(result.data));
  } catch (error) {
    console.log(error);
  }
};

export { getAllPokemon };
