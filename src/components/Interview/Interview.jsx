import React from 'react';

import {Link} from 'react-router-dom';

import svgLogo from 'assets/flamo-interview.svg';

import './styles';

const Interview = function({children}) {
  return (
    <div className="content sbs">
      <div className="sbs__summary">
        <figure role="presentation">
          <span className="nav-link__logo" dangerouslySetInnerHTML={{__html: svgLogo}} />
        </figure>
        <div className="sbs-summary__text">
          <h2>Summary of the interview</h2>
          <p>Interviewing is stressful, but preparation makes all the difference. Make sure to pratice standard questions like "Tell me about yourself". Then prepare for questions you can't predict by having a set of stories ready to answer with, these stories should represent great answers to the 3 Elemental questions. Finally be ready to interview them in turn.</p>
          <p>In short:</p>
          <ol>
            <li>Focus on the 3 Elemental questions</li>
            <li>Answer "tell me about yourself"</li>
            <li>Have 5+ stories</li>
            <li>Pratice using the stories to answer</li>
            <li>Have questions for them</li>
          </ol>
        </div>
      </div>
      <div className="sbs__title">
        <h1>How to interview</h1>
      </div>
      <div className="sbs__content">
        <h2>Why is it so hard?</h2>
        <p>Interviewing is the hardest part of the hiring process. It's a stressful test, you're being judged by strangers who only have a basic understanding of your skills, and it's just not something that people get to practice very often. The Elemental system helps with all of this!</p>
        <p>After you understand the process from the employer's point of view it becomes a lot easier, in fact this stressful test transforms intp a fun game.</p>
        <h2>Always remember the 3 Elemental questions</h2>
        <p>All you have to do in an interview is answer the 3 Elemental questions, everything you do should be focused on that.</p>
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