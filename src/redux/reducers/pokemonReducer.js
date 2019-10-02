import { GET_ALL_POKEMON } from "../actions/actionTypeConstants";

const INITIAL_STATE = [];

const PokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_POKEMON:
      console.log("action.pauload:", action.payload.results);
      return [...state, ...action.payload.results];
    default:
      return state;
  }
};

export default PokemonReducer;
