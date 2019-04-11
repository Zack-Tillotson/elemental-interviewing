import React from 'react';

import {Link} from 'react-router-dom';
import svgLogo from 'assets/flamo-resume.svg';

import './styles';

const Resume = function({children}) {
  return (
    <div className="content sbs">
      <div className="sbs__title">
        <h1>How to build a great Résumé</h1>
      </div>
      <div className="sbs__summary">
        <figure role="presentation">
          <span className="nav-link__logo" dangerouslySetInnerHTML={{__html: svgLogo}} />
        </figure>
        <div className="sbs-summary__text">
          <h2>In Summary</h2>
          <p>A great résumé is the starting point to successful interview, it should be easily skimmed and professional, and contain information you want to talk about during interviews.</p>
          <p>In short:</p>
          <ol>
            {['Skimmable', 'Proofread', 'Interesting', 'Contains buzzwords', '1-2 pages'].map((word, index) => (
              <li key={word}><input type="checkbox" id={index} /><label htmlFor={index}>{word}</label></li>
            ))}
          </ol>
        </div>
      </div>
      <div className="sbs__content">

        <h2>A Résumé is used in two ways</h2>
        <p>First use it to land interviews. Managers will look at your résumé for (literally) 5 seconds, it needs to tell them something in that time.</p>
        <p>Second use it to set the agenda during interviews. An interviewer will look over your resume for about 60 seconds. They'll ask you to give more detail about what they see, so your résumé should contain the things you want to talk about.</p>

        <h2>A Résumé must be skimmable</h2>
        <p>95% of the people looking at your résumé are just going to skim over it. Hiring managers look at tons of résumés, it's not worth it to them to read everything in detail if 99% of the résumés are obviously not a match.</p>
        <p>The résumé should be written with a heirarchy of detail. People don't read a résumé like they would a book - line by line, top to bottom. Instead they glance at the headlines, when they find something interesting they'll read it a bit closer.</p>
        <p>There is artisty in formatting a résumé well, but some suggestions are to use headers, bold text, and whitespace to draw the readers eyes.</p>
        <p>Another suggestion is to have each line of a description start with the "first 4 words" rule, where the first four words of each line should be understanding by themselves.</p>

        <h2>A conversation about your résumé should be a conversation about why you're great for the job.</h2>
        <p>The second use of your résumé is to be conversation starters during an interview.</p>
        <p>Often an interviewer will sit down having only a bare idea of who you are, they will instinctively use your résumé to drive the conversation.</p>
        <p>Therefore it's important your résumé lists the things you want to talk about - those things that highlight why you should be hired.</p>
        <p>In other words, a common mistake with a résumé is to list too much information. If you list all the minute tasks then it'll be very unlikely they'll ask you about the best things.</p>

        <h2>It should be proofread</h2>
        <p>One of the best heuristics for if an employee is going to work out is number of errors on a résumé. Proofread your résumé, then have your friends proofread it, then your mom, then do it again yourself!</p>

        <h2>Try to keep it 1-2 pages long</h2>
        <p>Length isn't all that important, but minimum of 1 full page and maximum of 2 pages are good guidelines. It's important to have enough length to be able to include all the industry buzzwords that might help and to have enough for an interview to talk about. A résumé that's too long might be taken as a sign that you're not able to be consise though, and the longer the résumé the more likely it will contain typos.</p>
      </div>
      <div className="sbs__footer">
        <Link to="/phone-screen/">Next: The phone screen →</Link>
      </div>
    </div>
  );
}

export default Resume;