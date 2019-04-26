import React from 'react';

import {Link} from 'react-router-dom';

import './styles';

const FollowUp = function({children}) {
  return (
    <div className="content sbs">
      <div className="sbs__title">
        <h1>Follow up after an interview</h1>
      </div>
      <div className="sbs__summary">
        <picture className="elemental-questions__logo">
          <source
            type="image/webp"
            alt="Bravely following up"
            srcSet="/assets/follow-180.webp"
          />
          <img className="nav-link__logo" src="/assets/follow-180.png" alt="Bravely following up" />
        </picture>
        <div className="sbs-summary__text">
          <h2>In Summary</h2>
          <p>You'll often need to follow up after an interview. Many people find awkward or think they will annoy the employer. This is not the case! Employers are busy and a follow up message can remind them to make the decision.</p>
        </div>
      </div>
      <div className="sbs__checklist">
        <h3>Follow up checklist:</h3>
        <ol>
          {['Wait around 4 days', 'Be proactive', 'Don\'t be scared'].map((word, index) => (
            <li key={word}><input type="checkbox" id={index} /><label htmlFor={index}>{word}</label></li>
          ))}
        </ol>
      </div>
      <div className="sbs__content">
        <h2>A follow up doesn't put your job at risk</h2>
        <p>A follow up message is just a tool used to remind the employer that you exist. People are busy and often there isn't enough time to finish all the tasks an employer has, they have to prioritize. If they push out giving you the offer letter it is often helpful to follow up with them. This encourages them to reprioritize and can get you the job.</p>
        <p>People sometimes think that a follow up phone call or email will annoy the employer and put their job at risk. This is not the case, it is much more likely to lose a job because they forgot about filling out the paperwork the HR department requires.</p>
        <h2>Follow up after about one work week</h2>
        <p>Typically send a follow up message in either phone or email form it if you haven't heard anything in 4 or 5 days.</p>
        <p>Don't take it personally if they don't get back to you, they're busy (because they haven't hired you yet!).</p>
        <p>Many times if an employer is on the fence about a candidate they could even see the follow up message as a signal you are proactive and professional.</p>
      </div>
    </div>
  );
}

export default FollowUp;