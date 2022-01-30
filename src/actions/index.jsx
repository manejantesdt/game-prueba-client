import axios from "axios";

// -----------------------<Gets>------------------------

export const getPlayers = ({ nick_name, order, status }) => {
  return async (dispatch) => {
    try {
      var json = (
        await axios.get(
          `http://localhost:3001/player?nickname=${
            nick_name ? nick_name : ""
          }&order=${order ? order : ""}&status=${status ? status : ""}`
        )
      ).data;
      dispatch({
        type: "GET_PLAYERS",
        payload: json,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getAvatar = () => {
  return async (dispatch) => {
    try {
      var json = (await axios.get("http://localhost:3001/avatar/")).data;
      dispatch({
        type: "GET_AVATAR",
        payload: json,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
// ______________________________________________________

export const createPlayer = (payload) => {
  return {
    type: "CREATE_PLAYER",
    payload: payload,
  };
};
