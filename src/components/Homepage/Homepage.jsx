import React from 'react';

import {Link} from 'react-router-dom';

import './styles';

const Homepage = function({children}) {
  return (
    <div className="content">
      <h1>Element Interviewing</h1>
      {children}
    </div>
  );
}

export default Homepage;