import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import { StaticRouter } from 'react-router-dom';

import Application from './Application';

ReactDOM.render(
  <StaticRouter page={'/'}>
    <Application />
  </StaticRouter>
, document.getElementById('app-container'));