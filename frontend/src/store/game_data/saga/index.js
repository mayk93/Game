/**
 * Created by michael on 07/04/2018.
 */

import { eventChannel } from 'redux-saga'
import { takeLatest, take, all, call, put } from 'redux-saga/effects'  // put
import { ACTIONS } from '../index'

const socket = new WebSocket("ws://localhost:8765");

export function* game_data_channel() {
    return eventChannel(emitter => {
        socket.onmessage = event => {
            // console.log('Received message: ', event);
            return emitter({ type: ACTIONS.GET_GAME_DATA, payload: JSON.parse(event.data) })
        };

        return () => {
            socket.close();
        };
    })
}

export function* get_game_data() {
    const gd_channel = yield call(game_data_channel);
    try {
        while (true) {
            const game_data = yield take(gd_channel);
            yield put(game_data)
        }
    } finally {
        console.log('Get game data terminated')
    }
}

export function* send_game_data(action) {
    try {
        yield socket.send(JSON.stringify(action.payload))
    } catch (e) {}
}

export function* watch_get_game_data() {
    yield takeLatest(ACTIONS.GET_GAME_DATA, get_game_data)
}

export function* watch_send_game_data() {
    yield takeLatest(ACTIONS.SEND_GAME_DATA, send_game_data)
}

export default function* root_saga() {
    yield all([
        watch_get_game_data(),
        watch_send_game_data()
    ])
}