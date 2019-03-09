import React from 'react';

import {Link} from 'react-router-dom';
import svg from 'assets/shake.svg';

import './styles';

const FollowUp = function({children}) {
  return (
    <div className="content sbs">
      <div className="sbs__summary">
        <figure role="presentation" dangerouslySetInnerHTML={{__html: svg}} />
        <div className="sbs-summary__text">
          <h2>Follow Up</h2>
          <p>After an in person interview make sure to:</p>
          <ol>
            <li>Wait around 4 days</li>
            <li>Be proactive</li>
            <li>Don't be scared</li>
          </ol>
        </div>
      </div>
      <div className="sbs__title">
        <h1>Follow up after an interview</h1>
      </div>
      <div className="sbs__content">
        <p>Do it if you haven't heard anything in ~4 days, then again after another 4 days.</p>
        <p>Don't take it personally if they don't get back to you, they're busy (because they haven't hired you yet!).</p>
        <p>It's a great opportunity and a big plus that you're willing to do it</p>
      </div>
    </div>
  );
}

export default FollowUp;