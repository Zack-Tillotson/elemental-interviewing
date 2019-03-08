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
          <h2>Résumé Checklist</h2>
          <ol>
            <li>Skimable</li>
            <li>Proofread</li>
            <li>Interesting</li>
            <li>Buzzwords</li>
            <li>At least 1 page</li>
            <li>Not more than 2 pages</li>
            <li>Proofread again</li>
          </ol>
        </div>
      </div>
      <h1>How to build a great Résumé</h1>
      <h2>A Résumé is used in two ways</h2>
      <p>1. How you land interviews. Managers will look at your résumé for (literally) 5 seconds, it needs to tell them something in that time.</p>
      <p>2. Sets agenda during interviews. An interviewer will look over your resume for about 60 seconds. They'll ask you to give more detail about what they see, so your résumé should contain the things you want to talk about.</p>
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
      <p>Length isn't that important, but minimum of 1 full page and maximum of 2 pages is a good guideline</p>
    </div>
  );
}

export default Resume;