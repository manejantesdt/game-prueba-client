import { CREATE_PLAYER } from "../action/actions";

const inizialstate = {
  form: {},
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
