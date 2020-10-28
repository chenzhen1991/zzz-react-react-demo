import App from './index.js';
import ReactDom from 'react-dom';
import React from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));