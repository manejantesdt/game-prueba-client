import { avatars } from "../utils/AuxData";

const inizialstate = {
  form: {},
  player: {},
  searchPlayer: [],
  players: [],
  avatars: avatars,
  nickname: "",
  avatar: "",
  order: "",
  status: "",
};

function rootReducer(state = inizialstate, action ) {
  switch (action.type) {
    case "GET_PLAYER_ID":
         return {
        ...state,
        
        player: action.payload[0],
      };
    case "GET_PLAYERS":
      return {
        ...state,
        players: action.payload,
      };
    case "SEARCH_PLAYERS":
      return {
        ...state,
        searchPlayer: action.payload,
      };
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
