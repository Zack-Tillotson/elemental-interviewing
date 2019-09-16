import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Application from './Application';
import content from 'content';

ReactDOM.render(
  <BrowserRouter>
    <Application content={content} />
  </BrowserRouter>
, document.getElementById('app-container'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/serviceWorker.js');
  });
}