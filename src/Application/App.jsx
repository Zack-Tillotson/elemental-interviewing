import React from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import store from './state/store';

import ScrollToTop from './ScrollToTop';
import PageTitle from './PageTitle';

import Page from '../components/Page';
import Homepage from '../components/Homepage';
import ContentPage from '../components/ContentPage';

import getContent from 'getContent';

function App() {
  return (
    <Provider store={store}>
      <Page>
        {getContent('7gC3t9SVMhmKSGJ1Nb8h5').fields.route.map(route => {
          let Comp = null;
          switch(route.sys.contentType.sys.id) {
            case 'homepage': {
              Comp = Homepage;
              break;
            }
            case 'contentPage': {
              Comp = ContentPage;
              break;
            }
          }

          return (
            <Route
              key={route.sys.id}
              path={route.fields.url}
              exact
              render={() => {
                return <Comp {...route} />;
              }} />
          );
        })}
        <ScrollToTop />
        <PageTitle />
      </Page>
    </Provider>
  );
}

export default App;