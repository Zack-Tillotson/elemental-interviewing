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
        <Route path="" exact component={Homepage} />
      </Page>
    </Provider>
  );
}

export default App;