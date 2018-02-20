import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { hydrate } from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import configureStore from '../../common/configureStore.js';

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);

//console.log(preloadedState);
hydrate(
    <Provider store = {store}>    
        <App />
    </Provider>, 
    document.getElementById('root')
)

