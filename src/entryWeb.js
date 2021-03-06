import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Application from './Application';

ReactDOM.render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>
, document.getElementById('app-container'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/serviceWorker.js');
  });
}