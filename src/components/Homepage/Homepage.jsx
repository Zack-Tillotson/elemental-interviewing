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
            <h1>Interviewing Simplified</h1>
            <p className="bragging">
              Interviewing comes down to the 3 Elemental questions. To get a great job learn what they are and how to answer them.
            </p>
          </div>
          <div className="column__two">
            <figure role="presentation">
              <span className="nav-link__logo" dangerouslySetInnerHTML={{__html: svgLogo}} />
            </figure>
          </div>
        </div>
      </header>
      <section className="content elemental-questions">
        <img src="/assets/elementalinterviewing_comic.png" />
        <div>
          <h2 className="content-headline">There are only 3 Elemental questions</h2>
          <p>The process of getting a job is weird! You have to do things you're not used to - writing down your qualifications in the form of a résumé, talking to strangers about your job history, answering silly interview questions, and much more.</p>
          <p>It's easy to be confused and distracted by all of this but the whole process can be boiled down to answering three Elemental questions.</p>
          <h3 className="ordered-list--important highlight">1. Can you do the job?</h3>
          <p>Are you technical capable of doing this job? Are you experienced enough? Can you learn the aspects of the job you don't already know?</p>
          <p>This question is trying to ensure an employee has the experience and technical skills to do the job. Many candidates think this is the only thing they need to show in order to get a job, but it's just the first step!</p>
          <h3 className="ordered-list--important highlight">2. Will you do the job?</h3>
          <p>Are you motivated and professional? Will you show up on time? Are you going to take a nap or surf the web instead of working?</p>
          <p>This question is different from the first, it is asking about your motivation and professionalism. An employer wants to know that the person they're hiring has the right attitude.</p>
          <h3 className="ordered-list--important highlight">3. Are you annoying?</h3>
          <p>Are we going to get along? How do you handle stress? Are you high maintinance? Do our personallities clash?</p>
          <p>Even the best candidate might not get an offer if you're not a fit in the company culture. There is nothing worse than being around someone who annoys you, you'll be together for 2,000+ hours every year so if they think you will annoy them they are not going to hire you.</p>
        </div>
      </section>

      <section className="content">
        <h2>That's it, everything else reduces to these 3 Elemental questions</h2>
        <p>When you're being asked weird questions or being sent through multiple rounds of interviews it can be confusing and frustrating. How does any of this help the employer? How could asking about my greatest weakness matter?</p>
        <p>The key to understanding this is realizing that they actually only care about the 3 Elemental questions. Regardless of what question you're asked or the puzzle you're tasked with it's all because the employer is seeking to answer "Can you do the job?", "Will you do the job?" or "Are you annoying?"</p>

        <h2>Convert difficult questions into the Elemental questions</h2>
        <p>Since you know the employer just cares about the 3 Elemental questions you can convert the question they ask you into its Elemental form.</p>
        <p>For example if you're asked "What is your greatest weakness?" you should rephrase the question in your head into its Elemental form. "With your greatest weakness can you still do the job?", "With your greatest weakness wil you still do this job?", "Is your greatest weakness annoying to me?".</p>
        <p>Questions in this context are a lot easier to answer.</p>

        <h2>Don't get frustrated, you have leverage</h2>
        <p>Even knowing about the Elemental questions it can be difficult and time consuming to get an offer, but don't give up. Companies are highly incentivized to hire someone, you can be that person.</p>
        <p>Finding a new employee is expensive. The employer is spending money, time, and energy to look through résumés, conduct phone screens, and interview.  The company only gets value from an employee after they hire someone. All of this combines to demonstrate that companies are highly incentivized to hire a candidate.</p>
        <p>Most companies hate the job hiring process as much as the candidates! It's distracting, stressful, and they often don't understand what they're doing. Be a great candidate and they'll jump at the chance to hire you.</p>

        <h2>Strategies for each stage of the process</h2>
        <p>The rest of this site will give specific strategies and tips for your résumé, for phone screening, and for interviewing. You can follow them or not but remember the 3 Elemental questions are what really matter.</p>

        <ol className="process-overview">
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