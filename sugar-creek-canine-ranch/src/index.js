import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {render} from 'react-dom';
import App from './app'

import reportWebVitals from './reportWebVitals';

 

import { BrowserRouter as Router } from 'react-router-dom';








const jsxElement = <h1>Sugar Creek Canine Ranch</h1>
console.log(jsxElement);
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


