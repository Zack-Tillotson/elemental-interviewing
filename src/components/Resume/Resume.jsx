import React from 'react';

import {Link} from 'react-router-dom';

import './styles';

const Resume = function({children}) {
  return (
    <div className="content sbs">
      <div className="sbs__summary">
        <figure role="presentation">
          <img className="nav-link__logo" src="/assets/mascot.png" />
        </figure>
        <div className="sbs-summary__text">
          <h2>Summary of creating a résumé</h2>
          <p>A great résumé is the starting point to successful interview, it should be easily skimmed and professional, and contain information you want to talk about during interviews.</p>
          <p>In short:</p>
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

        <h2>A Résumé must be skimmable</h2>
        <p>95% of the people looking at your résumé are just going to skim over it. This is just like a website</p>
        <ol>
          <li>Formatting - headers, bold text, whitespace</li>
          <li>"First 4 words" rule for each line</li>
        </ol>

        <h2>You should want to talk about your Résumé</h2>
        <p>The second use of your résumé is to be conversation starters during an interview.</p>
        <p>Often an interviewer will sit down having only a bare idea of who you are, they will instinctively use your résumé to drive the conversation.</p>
        <p>Therefore it's important your résumé lists the things you want to talk about - those things that highlight why you should be hired.</p>
        <p>In other words, a common mistake with a résumé is to list too much information. If you list all eight thousand tasks you did at your job then it'll be very unlikely they'll ask you about the best thing.</p>

        <h2>It should be proofread</h2>
        <p>One of the best heuristics for if an employee is going to work out is number of errors on a résumé. Proofread your résumé, then have your friends proofread it, then your mom, then do it again yourself!</p>

        <h2>It shouldn't be too short or too long</h2>
        <p>Length isn't all that important, but minimum of 1 full page and maximum of 2 pages is a good guideline. It's important to have enough length to be able to include all the industry buzzwords that might help and to have enough for an interview to talk about. A résumé that's too long might be taken as a sign that you're not able to be consise though, and the longer the résumé the more likely it will contain typos.</p>
      </div>
      <div className="sbs__footer">
        <Link to="/phone-screen/">Next: The phone screen →</Link>
      </div>
    </div>
  );
}

export default Resume;