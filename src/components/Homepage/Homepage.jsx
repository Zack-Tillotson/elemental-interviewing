import React, {Fragment} from 'react';

import {Link} from 'react-router-dom';
import svgLogo from 'assets/flamo.svg';

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
            <p className="bragging">Learn the foundation of a successful interview: answering the 3 Elemental questions.</p>
          </div>
          <div className="column__two">
            <figure role="presentation">
              <span className="nav-link__logo" dangerouslySetInnerHTML={{__html: svgLogo}} />
            </figure>
          </div>
        </div>
      </header>
      <section className="content highlight">
          <h2 className="content-headline">There are only 3 Elemental questions</h2>
          <h3 className="ordered-list--important">Can you do the job?</h3>
          <p>Are you technical capable of doing this job? Are you experienced enough? Can you learn the aspects of the job you don't already know?</p>
          <p>This question is trying to make sure an employee has the experience and technical skills to do a job. Many candidates think this is the only thing they need to show in order to get a job, but it's just the first step!</p>
          <h3 className="ordered-list--important">Will you do the job?</h3>
          <p>Are you motivated and professional? Will you show up on time? Are you going to take a nap or surf the web instead of working?</p>
          <p>This question is different from the first, it is asking about your motivation and professionalism. An employer wants to know that the person they're hiring has the right attitude! For example, if a candidate is over qualified for a job they still might not be hired. Why? Because the employer might be afraid that candidate would leave soon after being hired for a better job.</p>
          <h3 className="ordered-list--important">Are you annoying?</h3>
          <p>Are we going to get along? How do you handle stress? Are you high maintinance? Do our personallities clash?</p>
      </section>
      <section className="content">
        <h2>That's it! Answer those questions and get hired</h2>
        <p>Finding an employee is expensive. The employer is spending money, time, and energy to look through resumes, conduct phone screens, and do interviews. The further through the process a candidate is the more money is wasted when they pass - they'll only make money after they hire someone. This means they are incentivized to find someone.</p>
        <p>For employers it comes down to these three elemntal questions, once they find someone who answers them correctly they will hire that person.</p>
      </section>
      <section className="content">
        <h2>Everything in the job hunt boils down to the 3 Elemental questions</h2>
        <p>Regardless of what question you're asked, what weird interview process you're asked to go through, or how you're clothing is judged, it's all because the employer is seeking to answer the 3 Elemental questions.</p>
        <p>For example, they'll look at your Résumé for the industry "buzzwords" that show you'll be able to do the job - answering question #1 "Can you do the job?".</p>
        <p>Another example, what does it say if you are a few minutes late for an interview? Maybe don't actually care about this job? Answering question #2 "Will you do the job?"</p>
        <p>When trying to get a job the most important thing is answering these 3 Elemental questions. The rest of this site will give specific strategies and tips for your résumé, for phone screening, and for interviewing. You can follow them or not, but do remember the 3 Elemental questions, they are all that matter!</p>
        <p>Next we'll go over strategies & tips for each step of the job hunt process.</p>
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