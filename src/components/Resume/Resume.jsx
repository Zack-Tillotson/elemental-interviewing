import React from 'react';

import {Link} from 'react-router-dom';
import svgResume from 'assets/resume.svg';

import './styles';

const Resume = function({children}) {
  return (
    <div className="content sbs">
      <div className="sbs__summary">
        <figure role="presentation" dangerouslySetInnerHTML={{__html: svgResume}} />
        <div className="sbs-summary__text">
          <h2>Résumé Summary</h2>
          <p>For a great résumé make sure it's:</p>
          <ol>
            <li>Skimable</li>
            <li>Proofread</li>
            <li>Interesting</li>
            <li>Contains buzzwords</li>
            <li>1-2 pages</li>
          </ol>
        </div>
      </div>
      <div className="sbs__title">
        <h1>How to build a great Résumé</h1>
      </div>
      <div className="sbs__content">
        <h2>A Résumé is used in two ways</h2>
        <p>1. Use it to land interviews. Managers will look at your résumé for (literally) 5 seconds, it needs to tell them something in that time.</p>
        <p>2. Use it to set the agenda during interviews. An interviewer will look over your resume for about 60 seconds. They'll ask you to give more detail about what they see, so your résumé should contain the things you want to talk about.</p>
        <h2>A Résumé must be skimable</h2>
        <p>95% of the people looking at your resume are just going to skim over it. This is just like a website</p>
        <ol>
          <li>Formatting - headers, bold text, whitespace</li>
          <li>"First 4 words" rule for each line</li>
        </ol>
        <h2>You should want to talk about your Résumé</h2>
        <p>Include things you want to talk about</p>
        <h2>It should be proofread</h2>
        <p>One of the best heuristics for if an employee is going to work out is number of errors on a resume</p>
        <h2>It shouldn't be too short or too long</h2>
        <p>Length isn't all that important, but minimum of 1 full page and maximum of 2 pages is a good guideline</p>
      </div>
      <div className="sbs__footer">
        <Link to="/phone-screen/">Next: The phone screen →</Link>
      </div>
    </div>
  );
}

export default Resume;