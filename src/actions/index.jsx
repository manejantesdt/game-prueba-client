import axios from "axios";

// -----------------------<Gets>------------------------

export const getPlayers = ({ nickname, order, status }) => {
  console.log(nickname, order, status);
  return async (dispatch) => {
    try {
      var json = (
        await axios.get(
          `http://localhost:3001/player?nickname=${
            nickname ? nickname : ""
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
export const setStatus = (status) => {
  return {
    type: "SET_STATUS",
    payload: status,
  };
};
export const setNickname = (nickname) => {
  return {
    type: "SET_NICKNAME",
    payload: nickname,
  };
};
export const setOrder= (order) => {
  console.log(order, "action");
  return {
    type: "SET_ORDER",
    payload: order,
  };
};
