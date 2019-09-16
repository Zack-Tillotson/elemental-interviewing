import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom';

import Application from './Application';

const renderApp = (url, content) => ReactDOMServer.renderToString(
  <StaticRouter location={url}>
    <Application content={content} />
  </StaticRouter>
);

export default renderApp;
global.renderApp = renderApp; //hack