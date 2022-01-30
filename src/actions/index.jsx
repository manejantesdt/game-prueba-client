import axios from "axios";

/* export const CREATE_PLAYER = "CREATE_PLAYER" - BORRAR - no hace falta esto */

export const createPlayer = (payload) => {
    console.log(payload,"payload")
    return {
        type: "CREATE_PLAYER",
        payload: payload
    }
}


export function getAvatar() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/avatar/");
        return dispatch({
            type: "GET_AVATAR",
            payload: json.data
        })
    }
};


