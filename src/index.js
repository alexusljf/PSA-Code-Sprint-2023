import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'; // Import HashRouter
import App from './App';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
