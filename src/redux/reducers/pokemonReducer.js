import { GET_ALL_POKEMON } from "../actions/actionTypeConstants";

const INITIAL_STATE = ["pikachu", "charmander"];

const PokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_POKEMON:
      return state;
    default:
      return state;
  }
};

export default PokemonReducer;
