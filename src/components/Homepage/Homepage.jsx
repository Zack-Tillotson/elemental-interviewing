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
      <header className="homepage__header">
        <div className="content">
          <div className="column__one">
            <h1>
              Interviewing Simplified
            </h1>
            <p className="bragging">Learn the foundation of a successful interview: answering the 3 Elemental questions. Then learn specific step by step tips for creating a résumé, doing the phone screen, full in person interviews, and following up.</p>
          </div>
          <div className="column__two">
            <figure role="presentation">
              <img className="nav-link__logo" src="/assets/mascot.png" />
            </figure>
          </div>
        </div>
      </header>
      <section className="highlight">
        <div className="content">
          <h2 className="content-headline">There are only 3 elemental questions</h2>
          <h3 className="ordered-list--important">1. Can you do the job?</h3>
          <p>Are you technical capable of doing this job? Are you experienced enough? Can you learn the aspects of the job you don't already know?</p>
          <h3 className="ordered-list--important">2. Will you do the job?</h3>
          <p>Are you motivated and professional? Will you show up on time? Are you going to take a nap or surf the web instead of working?</p>
          <h3 className="ordered-list--important">3. Are you annoying?</h3>
          <p>Are we going to get along? How do you handle stress? Are you high maintinance? Do our personallities clash?</p>
        </div>
      </section>
      <section className="content content--two-column">
        <div className="column__two">
          <h2>Companies want to hire someone</h2>
          <p>Finding an employee is expensive. The employer is spending money, time, and energy to look through resumes, conduct phone screens, and do interviews. The further through the process a candidate is the more money is wasted when they pass - they'll only make money after they hire someone. This means they are incentivized to find someone.</p>
          <p>For employers it comes down to three simple questions, once they find someone who answers them correctly they will hire that person.</p>
        </div>
      </section>
      <section className="content">
        <h2>All other questions reduce to the 3 Elemental questions</h2>
        <p>For example, they'll look at your Résumé for the industry "buzzwords" that show you'll be able to do the job - answering question #1 "Can you do the job?".</p>
        <p>Another example, what does it say if you are a few minutes late for an interview? Maybe don't actually care about this job? Answering question #2 "Will you do the job?"</p>
        <p>Next we'll go over each step of the job hunt process.</p>
      </section>
      <section className="content process-overview">
        <h3>The stages of the hiring process</h3>
        <ol>
          <li>
            <Link to="/resume/" className="process-overview__stage">
              <span className="process-overview__num">1. </span>
              <span className="process-overview__text">Create a Résumé</span>
              <span className="process-overview__next">→</span>
            </Link>
          </li>
          <li>
            <Link to="/phone-screen/" className="process-overview__stage">
              <span className="process-overview__num">2. </span>
              <span className="process-overview__text">The phone screen</span>
              <span className="process-overview__next">→</span>
            </Link>
          </li>
          <li>
            <Link to="/interview/" className="process-overview__stage">
              <span className="process-overview__num">3. </span>
              <span className="process-overview__text">In person interviews</span>
              <span className="process-overview__next">→</span>
            </Link>
          </li>
          <li>
            <Link to="/follow-up/" className="process-overview__stage">
              <span className="process-overview__num">4. </span>
              <span className="process-overview__text">Follow up</span>
              <span className="process-overview__next">→</span>
            </Link>
          </li>
        </ol>
      </section>
    </Fragment>
  );
}

export default Homepage;