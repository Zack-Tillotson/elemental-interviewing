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
          <p>Even the best candidate might get passed on if you're not a fit in the company culture. After all, they will be around you for 2,000+ hours every year, if you annoy them they are not going to hire you.</p>
      </section>
      <section className="content">
        <h2>Everything boils down to these 3 Elemental questions</h2>
        <p>When you're being asked weird questions or being sent through multiple rounds of interviews it can be confusing and frustrating. How does any of this make sense? How could asking about my greatest weakness help the employer?</p>
        <p>The key to understanding this is realizing that they actually only care about the 3 Elemental questions. Regardless of what question you're asked, what weird interview process you're asked to go through, or how you're clothing is judged, it's all because the employer is seeking to answer "Can you do the job?", "Will you do the job?" or "Do you annoy me?".</p>
      </section>
      <section className="content">
        <h2>Convert their questions into the Elemental questions</h2>
        <p>For the example above, when you're asked "What is your greatest weakness?" you should rephrase the question in your head. "Would your greatest weakness prevent you from being able to do the job?", "Would you greatest weakness make it so you wont do this job?", "Would your greatest weakness annoy me?".</p>
        <p>When you think about the question in this context it's a lot easier to answer.</p>
      </section>
      <section className="content">
        <h2>You have leverage in the job hunt</h2>
        <p>Finding an employee is expensive! The employer is spending money, time, and energy to look through résumés, conduct phone screens, and do interviews. The further through the process a candidate is the more money is wasted when they pass - they'll only make money after they hire someone. All of this combines to demonstrate that companies are highly incentivized to hire a candidate.</p>
        <p>Most companies hate the job hiring process as much as the candidates! It's distracting, stressful, and they often don't understand what they're doing. Be a great candidate and they'll jump at the chance to hire you.</p>
      </section>
      <section className="content process-overview">
        <h2>Want résumé and interviewing specifics?</h2>
        <p>The rest of this site will give specific strategies and tips for your résumé, for phone screening, and for interviewing. You can follow them or not but remember the 3 Elemental questions are what really matter.</p>
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