import {
  GET_ALL_POKEMON,
  GET_POKEMON_BY_NAME
} from "../actions/actionTypeConstants";

const INITIAL_STATE = [];

const PokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_POKEMON:
      return [...state, ...action.payload.results];
    case GET_POKEMON_BY_NAME:
      return state;
    default:
      return state;
  }
};

export default PokemonReducer;
