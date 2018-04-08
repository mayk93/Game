/**
 * Created by michael on 07/04/2018.
 */

import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import root_saga from './sagas'


const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware ];

const connect = createStore(
    reducers,
    compose(applyMiddleware(...middlewares))
);
sagaMiddleware.run(root_saga);

export default connect