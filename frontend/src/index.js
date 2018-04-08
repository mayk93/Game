import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import connect from './store/connect'


ReactDOM.render(
    <Provider store={connect}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
