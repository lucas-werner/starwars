import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<Router basename='/starwars'><Route exact path='/' component={App} /></Router>, document.getElementById('root'));
