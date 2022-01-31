import { data, avatars } from "../Aux_Data";

const inizialstate = {
  form: {},
  player: {},
  players: data,
  avatars: avatars,
  nickname: "",
  avatar: "",
  order: "",
  status: "",
};

function rootReducer(state = inizialstate, action /* { type, payload } */) {
  switch (action.type) {
    case "CREATE_PLAYER":
      return {
        ...state,
        form: action.payload,
      };
    case "GET_AVATAR":
      return {
        ...state,
        avatars: action.payload,
      };
    case "SET_ORDER":
      return {
        ...state,
        order: action.payload,
      };
    case "SET_NICKNAME":
      return {
        ...state,
        nickname: action.payload,
      };
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
}
export default rootReducer;
