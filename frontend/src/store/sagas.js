/**
 * Created by michael on 07/04/2018.
 */

import { all } from 'redux-saga/effects'
import game_data from './game_data/saga'

export default function* rootSaga() {
    yield all([
        game_data()
    ])
}