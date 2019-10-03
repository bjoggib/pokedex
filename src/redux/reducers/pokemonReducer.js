import {
  GET_POKEMON,
  GET_POKEMON_BY_NAME,
  SAVE_TO_MY_POKEMON,
  DELETE_FROM_MY_POKEMON
} from "../actions/actionTypeConstants";

const INITIAL_STATE = {
  nextPage: null,
  pokemonList: [],
  chosenPokemon: null,
  myPokemon: []
};

const PokemonReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_POKEMON:
      return {
        nextPage: action.payload.next,
        pokemonList: [...state.pokemonList, ...payload.results]
      };
    case GET_POKEMON_BY_NAME:
      return { ...state, chosenPokemon: payload };
    case SAVE_TO_MY_POKEMON:
      return { ...state, myPokemon: [...state.myPokemon, payload] };
    case DELETE_FROM_MY_POKEMON:
      return {
        ...state,
        myPokemon: state.myPokemon.filter(p => p.id !== payload)
      };
    default:
      return state;
  }
};

export default PokemonReducer;
