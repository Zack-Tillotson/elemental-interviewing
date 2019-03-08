import React from 'react';

import {Link} from 'react-router-dom';

import './styles';

const FollowUp = function({children}) {
  return (
    <div className="content">
      <h1>Follow-Up</h1>
      <p>Do it if you haven't heard anything in ~4 days, then again after another 4 days.</p>
      <p>Don't take it personally if they don't get back to you, they're busy (because they haven't hired you yet!).</p>
      <p>It's a great opportunity and a big plus that you're willing to do it</p>
    </div>
  );
}

export default FollowUp;