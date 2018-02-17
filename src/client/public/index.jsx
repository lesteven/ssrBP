import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { hydrate } from 'react-dom';
import App from './App.jsx';



hydrate(<App />, document.getElementById('root'))

