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
        <h2>Companies want to hire you!</h2>
        <p>Finding an employee is expensive. The employer is spending money, time, and energy to look through resumes, conduct phone screens, and do interviews. The further through the process a candidate is the more money is wasted when they pass on that candidate. They'll only make money after they hire someone. This means they are incentized to find someone!</p>
        <p>At its core interviewing is a simple process. The hiring company has a need and once they are convinced you can fill it then they'll hire you. So how do they know if you're the right person?</p>
      </section>
      <section className="content">
        <h2 className="content-headline">The 3 questions you must answer to get hired:</h2>
        <h3 className="ordered-list--important">1. Can you do the job?</h3>
        <p>Are you technical capable of doing this job? Are you experienced enough? Can you learn the aspects of the job you don't already know?</p>
        <h3 className="ordered-list--important">2. Will you do the job?</h3>
        <p>Are you motivated and professional? Will you show up on time? Are you going to fall asleep during the day or read Facebook instead of working?</p>
        <h3 className="ordered-list--important">3. Are you annoying?</h3>
        <p>Are we going to get along? How do you handle stress? Are you high maintinance? Do our personallities clash?</p>
        <h2>All other questions boil down to these Elemental questions</h2>
        <p>When you're asked "What is your greatest weakness?" the interviewer <span className="bold">does not care</span> about your weakness - they just want to know <span className="bold">are able do the job</span>?</p>
      </section>
      <hr />
      <section className="content">
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