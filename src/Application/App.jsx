import React from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import store from './state/store';

import Page from '../components/Page';
import Homepage from '../components/Homepage';

function App() {
  return (
    <Provider store={store()}>
      <Page>
        <Route path="/" exact component={Homepage} />
        <Route path="/about-us/" exact component={() => 'about us'} />
      </Page>
    </Provider>
  );
}

export default App;