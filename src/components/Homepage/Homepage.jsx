import React, {Fragment} from 'react';

import {Link} from 'react-router-dom';
import svgResume from 'assets/resume.svg';
import svgPhone from 'assets/phone.svg';
import svgPerson from 'assets/person.svg';
import svgHandshake from 'assets/shake.svg';
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
          <p className="bragging">This is a proven strategy with step by step guidelines. I'll break down the Elements of getting a great job.</p>
        </div>
      </header>
      <section className="content content--two-column">
        <div className="column__two">
          <h2>Companies want to hire you!</h2>
          <p>Finding an employee is expensive. The employer is spending money, time, and energy to look through resumes, conduct phone screens, and do interviews. The further through the process a candidate is the more money is wasted when they pass on that candidate. They'll only make money after they hire someone. This means they are incentized to find someone!</p>
        </div>
      </section>
      <section className="content content--mini-one-column">
        <h2 className="content-headline">Answer these 3 questions to get hired</h2>
        <h3 className="ordered-list--important">1. Can you do the job?</h3>
        <p>Are you technical capable of doing this job? Are you experienced enough? Can you learn the aspects of the job you don't already know?</p>
        <h3 className="ordered-list--important">2. Will you do the job?</h3>
        <p>Are you motivated and professional? Will you show up on time? Are you going to fall asleep during the day or read Facebook instead of working?</p>
        <h3 className="ordered-list--important">3. Are you annoying?</h3>
        <p>Are we going to get along? How do you handle stress? Are you high maintinance? Do our personallities clash?</p>
        <h2 className="extra-spaced">All other questions boil down to these Elemental questions</h2>
      </section>
      <section className="secondary-dark">
        <div className="content">
          <h2 className="content-headline">What should you expect during the hiring process?</h2>
          <ol className="process-overview content content--mini-one-column">
            <li>
              <figure role="presentation" dangerouslySetInnerHTML={{__html: svgResume}} />
              <h3>1. Create a Résumé</h3>
              <p>A Résumé is two things. First it's <span className="bold">how you land interviews</span>. Second it then drives <span className="bold">what you talk about</span> during the interview</p>
              <Link to="/resume/">Learn more</Link>
            </li>
            <li>
              <figure role="presentation" dangerouslySetInnerHTML={{__html: svgPhone}} />
              <h3>2. Go through a phone screen</h3>
              <p>The phone screen is a <span className="bold">short technical interview</span>. They're hard to prepare for, but a little research goes a long ways.</p>
            </li>
            <li>
              <figure role="presentation" dangerouslySetInnerHTML={{__html: svgPerson}} />
              <h3>3. Conduct Interviews</h3>
              <p>The interview is the most stressful, most exciting part of the whole process.</p>
              <Link to="/interview/">Learn more></Link>
            </li>
            <li>
              <figure role="presentation" dangerouslySetInnerHTML={{__html: svgHandshake}} />
              <h3>4. Sometimes you need to follow up</h3>
              <p>It can be awkward, but it's often the difference between sitting on someone's "to do" list and getting the offer.</p>
            </li>
          </ol>
        </div>
      </section>
    </Fragment>
  );
}

export default Homepage;