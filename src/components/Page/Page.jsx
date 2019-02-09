import React, {Fragment} from 'react';

import './styles';

import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';

function Page({ children }) {
  return (
    <Fragment>
      <Header />
      <Body>
        {children}
      </Body>
      <Footer />
    </Fragment>
  );
}

export default Page;