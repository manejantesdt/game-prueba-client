/* import { CREATE_PLAYER } from "../actions/index"; */
import  { data, avatars } from "../Aux_Data";

const inizialstate = {
  form: {},
  player: {},
  players: data,
  avatars : avatars, //declaro un nuevo estado avatars donde guardo los avatars
};

function rootReducer(state = inizialstate, action /* { type, payload } */) {
  switch (action.type) {
    case "CREATE_PLAYER":
      return {
        ...state,
        form: action.payload,
      };
      case "GET_AVATAR" :
            return {
                ...state,
                avatars: action.payload
            }

    default:
      return state;
  }
}
export default rootReducer;
