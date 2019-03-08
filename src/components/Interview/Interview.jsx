import React from 'react';

import {Link} from 'react-router-dom';

import './styles';

const Interview = function({children}) {
  return (
    <div className="content">
      <h1>Interview</h1>
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
      <section className="content">
        <Link to="/follow-up/">Learn More →</Link>
      </section>
    </div>
  );
}

export default Interview;