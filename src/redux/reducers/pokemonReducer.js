import {
  GET_POKEMON,
  GET_POKEMON_BY_NAME
} from "../actions/actionTypeConstants";

const INITIAL_STATE = {
  nextPage: null,
  pokemonList: []
};

const PokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        nextPage: action.payload.next,
        pokemonList: [...state.pokemonList, ...action.payload.results]
      };
    case GET_POKEMON_BY_NAME:
      return state;
    default:
      return state;
  }
};

export default PokemonReducer;
