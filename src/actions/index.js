import axios from "axios";

// -----------------------<Gets>------------------------

export const searchPlayers = ({ nick_name, order, status }) => {
  return async (dispatch) => {
    try {
      const json = (
        await axios.get(
          `https://mrsemsqfk6.execute-api.us-east-1.amazonaws.com/player?nick_name=${
            nick_name ? nick_name : ""
          }&order=${order ? order : ""}&status=${
            status ? status : ""
          }&amount=3200`
        )
      ).data;
      const players = json.body.players;
      dispatch({
        type: "SEARCH_PLAYERS",
        payload: players,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
export const getPlayers = () => {
  return async (dispatch) => {
    try {
      const json = (
        await axios.get(
          `https://mrsemsqfk6.execute-api.us-east-1.amazonaws.com/player?nickname=&amount=50&order=desc`
        )
      ).data;
      const players = json.body.getPlayers;
      dispatch({
        type: "GET_PLAYERS",
        payload: players,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getAvatar = () => {
  return async (dispatch) => {
    try {
      const avatar = (await axios.get("http://localhost:3001/avatar/")).data;
      dispatch({
        type: "GET_AVATAR",
        payload: avatar,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
export const createPlayer = (player) => {
  return async (dispatch) => {
    try {
      const json = (
        await axios.post(
          "https://mrsemsqfk6.execute-api.us-east-1.amazonaws.com/player",
          player
        )
      ).data;
      dispatch({
        type: "CREATE_PLAYER",
        json,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPlayerId = (Id) => {
  return async (dispatch) => {
    try {
      const json = (
        await axios.get(
          `https://mrsemsqfk6.execute-api.us-east-1.amazonaws.com/player/${Id}`
        )
      ).data;
      const player = json.body;
      dispatch({
        type: "GET_PLAYER_ID",
        payload: player,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editPlayer = (Id, player) => {
  console.log(Id,player);
  return async (dispatch) => {
    try {
      const json = (
        await axios.put(
          `https://mrsemsqfk6.execute-api.us-east-1.amazonaws.com/player/` + Id,
          player
        )
      ).data;
      dispatch({
        type: "EDIT_PLAYER",
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const deletePlayer = (Id) => {
  return async (dispatch) => {
    try {
      const json = (
        await axios.delete(
          `https://mrsemsqfk6.execute-api.us-east-1.amazonaws.com/player/${Id}`
        )
      ).data;
      dispatch({
        type: "DELETE_PLAYER",
        json,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// ______________________________________________________

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
export const setOrder = (order) => {
  return {
    type: "SET_ORDER",
    payload: order,
  };
};
// export const setId = (id) => {
//   return {
//     type: "SET_ID",
//     payload: id,
//   };
// };
