export const CREATE_PLAYER = "CREATE_PLAYER"

export const createPlayer = (payload) => {
    console.log(payload,"payload")
    return {
        type: CREATE_PLAYER,
        payload: payload
    }
}
