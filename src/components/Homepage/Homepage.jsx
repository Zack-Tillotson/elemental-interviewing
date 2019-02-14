import React, {Fragment} from 'react';

import {Link} from 'react-router-dom';

import './styles';

const Homepage = function({children}) {
  return (
    <Fragment>
      <header>
        <div className="content">
          <h1>
            <span className="preline">Get a job with</span>
            Elemental Interviewing
          </h1>
          <p className="bragging">This is a proven strategy with step by step guidelines. It's been successfully applied to multiple job types and in many situations.</p>
        </div>
      </header>
      <section className="content">
        <p>At its core interviewing is a simple process. The hiring company has a need and once they are convinced you can fill it then they'll hire you.</p>
        <h2 className="content-headline">3 questions you must answer to get hired:</h2>
        <ol className="ordered-list--important">
          <li>Can you do the job?</li>
          <li>Will you do the job?</li>
          <li>Are you annoying?</li>
        </ol>
        <p>Focus on answering these questions! When you've answered these questions in the mind of the manager you'll get the job. These questions are answered by everything you do, not just by the words you use to answer questions. Your resume, clothes, demeaner, interview answers, interview questions, and more all matter! Fortunately, you have a secret weapon on your side...</p>
        <h2>Companies want to hire you!</h2>
        <p>Hiring someone is expensive. Firing someone is even more expensive. Therefore they want to hire you but also want to ensure you'll work out.</p>
        <h2>The process</h2>
        <img src="//proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.o1kAzONEY55YZ6cLj5WIzgHaEK%26pid%3D15.1&f=1" />
        <ol>
          <li><Link to="/">1. Understand the process</Link></li>
          <li><Link to="/resume/">2. Create a great resume</Link></li>
          <li><Link to="/interview/">3. Prepare for the interview</Link></li>
        </ol>
      </section>
      <nav>
        Next: <Link to="/resume/">Make a killer Resume</Link>
      </nav>
    </Fragment>
  );
}

export default Homepage;