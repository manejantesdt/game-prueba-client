import { CREATE_PLAYER } from "../actions/index";
import data from "../Aux_Data";

const inizialstate = {
  form: {},
  player: {},
  players:data
};

function rootReducer(state = inizialstate, { type, payload }) {
  switch (type) {
    case CREATE_PLAYER:
      return {
        ...state,
        form: payload,
      };

    default:
      return state;
  }
}
export default rootReducer;
