import * as types from "../actions/actionTypeConstants";

const INITIAL_STATE = {
  pokemonList: [],
  chosenPokemon: null,
  myPokeDex: []
};

const PokemonReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.GET_POKEMON:
      return {
        ...state,
        pokemonList: [...state.pokemonList, ...payload.results]
      };
    case types.GET_POKEMON_BY_ID:
      return {
        ...state,
        chosenPokemon: payload
      };
    case types.SAVE_TO_MY_POKEMON:
      return {
        ...state,
        myPokeDex: [...state.myPokeDex, payload]
      };
    case types.DELETE_FROM_MY_POKEMON:
      return {
        ...state,
        myPokeDex: state.myPokeDex.filter(p => p.id !== payload)
      };
    case types.GET_MY_POKEDEX:
      return {
        ...state,
        myPokeDex: payload
      };
    case types.RESET_CHOSEN_POKEMON:
      return {
        ...state,
        chosenPokemon: payload
      };
    default:
      return state;
  }
};

export default PokemonReducer;
