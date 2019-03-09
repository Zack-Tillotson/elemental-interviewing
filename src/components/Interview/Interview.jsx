import React from 'react';

import {Link} from 'react-router-dom';
import svg from 'assets/person.svg';

import './styles';

const Interview = function({children}) {
  return (
    <div className="content sbs">
      <div className="sbs__summary">
        <figure role="presentation" dangerouslySetInnerHTML={{__html: svg}} />
        <div className="sbs-summary__text">
          <h2>Interview Summary</h2>
          <p>For the in person interview make sure to:</p>
          <ol>
            <li>Answer "tell me about yourself"</li>
            <li>Have 5+ stories</li>
            <li>Pratice using the stories to answer</li>
            <li>Have questions for them</li>
          </ol>
        </div>
      </div>
      <div className="sbs__title">
        <h1>How to in person interview</h1>
      </div>
      <div className="sbs__content">
        <h2>Tell me about yourself</h2>
        <p>i.e. "Why should we hire you for this position"? This should be 4-5 sentences that you can give without hesitation, definately prepare and practice this answer.</p>
        <h2>Technical questions</h2>
        <p>These are generally "you know it or you don't", but even if you don't know the answer you can always talk about what you do know. An answer about something related is much better than a non-answer</p>
        <h2>All other questions</h2>
        <p>Answer the 3 Elemental Questions</p>
        <p>Use Stories. Have 5+ stories ready, where a story is a situation which portrays you in a positive light and answers one or more of the 3 elemental questions. Apply these stories to any question.</p>
        <p>Pratice!</p>
        <h2>Your questions for them</h2>
        <p>Start a conversation, don't check a box.</p>
        <p>Use the "First Date" strategy - ask questions which let them talk about things they like.</p>
      </div>
      <div className="sbs__footer">
        <Link to="/follow-up/">Next: Following up →</Link>
      </div>
    </div>
  );
}

export default Interview;