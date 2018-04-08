/**
 * Created by michael on 07/04/2018.
 */


const GET_GAME_DATA = "GAME_DATA";
const SEND_GAME_DATA = "SEND_GAME_DATA";

export const ACTIONS = {
    GET_GAME_DATA,
    SEND_GAME_DATA
};

export const get_game_data = () => ({
    type: GET_GAME_DATA
});

export const send_game_data = game_data => ({
    type: SEND_GAME_DATA,
    payload: game_data
});

const initial_state = [{"user": 0, "x": 100, "y": 100}];

export default (state = initial_state, action) => {
    switch (action.type) {
        case GET_GAME_DATA:
            console.log('Reducer, action, state: ', action, state);
            return (action.payload && action.payload.game_data) || state;
        case SEND_GAME_DATA:
            return state;
        default:
            return state
  }
}