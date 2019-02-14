import React from 'react';

import {Link} from 'react-router-dom';

import './styles';

const Resume = function({children}) {
  return (
    <div className="content">
      <h1>Resume</h1>
      <img src="//proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.o1kAzONEY55YZ6cLj5WIzgHaEK%26pid%3D15.1&f=1" />
      <h2>Two objectives</h2>
      <p>Used by managers & recruiters to identify those with related skillsets</p>
      <p>Used by interviewers to drive interview</p>
      <h2>Must be skimable</h2>
      <p>95% of the people looking at your resume are just going to skim over it. This is just like a website</p>
      <ol>
        <li>Formatting - headers, bold text, whitespace</li>
        <li>"First 4 words" rule for each line</li>
      </ol>
      <p>Include things you want to talk about</p>
      <p>Length isn't that important, but minimum of 1 full page and maximum of 2 pages is a good guideline</p>
    </div>
  );
}

export default Resume;