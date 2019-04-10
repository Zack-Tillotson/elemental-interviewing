import React from 'react';

import {Link} from 'react-router-dom';
import svgLogo from 'assets/flamo-offer.svg';

import './styles';

const FollowUp = function({children}) {
  return (
    <div className="content sbs">
      <div className="sbs__summary">
        <figure role="presentation">
          <span className="nav-link__logo" dangerouslySetInnerHTML={{__html: svgLogo}} />
        </figure>
        <div className="sbs-summary__text">
          <h2>Summary of following up</h2>
          <p>You'll often need to follow up after an interview. Many people find awkward or think they will annoy the employer. This is not the case! Employers are busy and a follow up message can get you back on their radar.</p>
          <p>In short:</p>
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