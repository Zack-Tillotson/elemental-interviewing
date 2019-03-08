import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import './styles';

const PhoneScreen = function({children}) {
  return (
    <Fragment>
      <header className="homepage__header">
          <h1>
            Phone Screen
          </h1>
      </header>
      <section className="content">
        <Link to="/interview/">Learn More →</Link>
      </section>
    </Fragment>
  );
}

export default PhoneScreen;