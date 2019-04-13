import React from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import store from './state/store';

import ScrollToTop from './ScrollToTop';
import PageTitle from './PageTitle';

import Page from '../components/Page';
import Homepage from '../components/Homepage';
import Resume from '../components/Resume';
import PhoneScreen from '../components/PhoneScreen';
import Interview from '../components/Interview';
import FollowUp from '../components/FollowUp';
// import Printable from '../components/Printable';


const componentMap = {
  'Homepage': Homepage,
  'Resume': Resume,
  'PhoneScreen': PhoneScreen,
  'Interview': Interview,
  'FollowUp': FollowUp,
  undefined: () => 'TODO',
};

const routes = require('routes');

function App() {
  return (
    <Provider store={store}>
      <Page>
        {routes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            exact
            component={componentMap[route.component]} />
        )}
        <Route path="/print/" exact component={() => (
          <div className="printable">
            <Homepage />
            <Resume />
            <PhoneScreen />
            <Interview />
            <FollowUp />
          </div>
        )} />
        <ScrollToTop />
        <PageTitle />
      </Page>
    </Provider>
  );
}

export default App;