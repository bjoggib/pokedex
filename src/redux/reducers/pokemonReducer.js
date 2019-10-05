import {
  GET_POKEMON,
  GET_POKEMON_BY_ID,
  SAVE_TO_MY_POKEMON,
  DELETE_FROM_MY_POKEMON,
  GET_MY_POKEDEX,
  RESET_CHOSEN_POKEMON
} from "../actions/actionTypeConstants";

const INITIAL_STATE = {
  pokemonList: [],
  chosenPokemon: null,
  myPokeDex: []
};

const PokemonReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemonList: [...state.pokemonList, ...payload.results]
      };
    case GET_POKEMON_BY_ID:
      return { ...state, chosenPokemon: payload };
    case SAVE_TO_MY_POKEMON:
      return { ...state, myPokeDex: [...state.myPokeDex, payload] };
    case DELETE_FROM_MY_POKEMON:
      return {
        ...state,
        myPokeDex: state.myPokeDex.filter(p => p.id !== payload)
      };
    case GET_MY_POKEDEX:
      return {
        ...state,
        myPokeDex: payload
      };
    case RESET_CHOSEN_POKEMON:
      return {
        ...state,
        chosenPokemon: payload
      };
    default:
      return state;
  }
};

export default PokemonReducer;
