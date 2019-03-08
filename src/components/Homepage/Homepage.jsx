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
        <div className="column__one">
          <h1>
            Elemental
          </h1>
          <p className="bragging">A proven step by step guide to a successful job hunt. Interviewing is a game - learn the rules, practice the skills, & get a job.</p>
        </div>
        <div className="column__two">
          <figure role="presentation">
            <img className="nav-link__logo" src="/assets/mascot.png" />
          </figure>
        </div>
      </header>
      <section className="content highlight">
        <h2 className="content-headline">The 3 Elemental questions to get hired</h2>
        <h3 className="ordered-list--important">1. Can you do the job?</h3>
        <p>Are you technical capable of doing this job? Are you experienced enough? Can you learn the aspects of the job you don't already know?</p>
        <h3 className="ordered-list--important">2. Will you do the job?</h3>
        <p>Are you motivated and professional? Will you show up on time? Are you going to take a nap or surf the web instead of working?</p>
        <h3 className="ordered-list--important">3. Are you annoying?</h3>
        <p>Are we going to get along? How do you handle stress? Are you high maintinance? Do our personallities clash?</p>
      </section>
      <section className="content content--two-column">
        <div className="column__two">
          <h2>Companies want to hire someone</h2>
          <p>Finding an employee is expensive. The employer is spending money, time, and energy to look through resumes, conduct phone screens, and do interviews. The further through the process a candidate is the more money is wasted when they pass - they'll only make money after they hire someone. This means they are incentivized to find someone.</p>
          <p>For employers it comes down to three simple questions, once they find someone who answers them correctly they will hire that person.</p>
        </div>
      </section>
      <section className="content">
        <h2>Everything reduces to these 3 Elemental questions</h2>
        <p>For example, they'll look at your Résumé for the industry "buzzwords" that show you'll be able to do the job - answering question #1 "Can you do the job?".</p>
        <p>Another example, what does it say if you are a few minutes late for an interview? Maybe don't actually care about this job? Answering question #2 "Will you do the job?"</p>
        <p>Next we'll go over each step of the job hunt process.</p>
      </section>
      <section className="content">
        <h2 className="content-headline">The steps of the hiring process</h2>
        <ol className="process-overview content">
          <li>
            <figure role="presentation" dangerouslySetInnerHTML={{__html: svgResume}} />
            <h3>1. Create a Résumé</h3>
            <p>A Résumé is two things.</p>
            <ol>
              <li>
                <div className="bold">1. How you land interviews</div>
                Managers will look at your résumé for (literally) 5 seconds, it needs to tell them something in that time.
              </li>
              <li>
                <div className="bold">2. Sets agenda during interviews</div>
                An interviewer will look over your resume for about 60 seconds. They'll ask you to give more detail about what they see, so your résumé should contain the things you want to talk about.
              </li>
            </ol>
            <Link to="/resume/">Learn more →</Link>
          </li>
          <li>
            <figure role="presentation" dangerouslySetInnerHTML={{__html: svgPhone}} />
            <h3>2. Go through a phone screen</h3>
            <p>It's a short technical interview. They're hard to prepare for, but a little research goes a long ways.</p>
            <Link to="/phone-screen/">Learn more →</Link>
          </li>
          <li>
            <figure role="presentation" dangerouslySetInnerHTML={{__html: svgPerson}} />
            <h3>3. Interview</h3>
            <p>Interviewing can be broken down in to 3 parts.</p>
            <ol>
              <li>
                <div className="bold">1. Tell me about yourself</div>
                i.e. "Why should we hire you? This is by far the most common first question and also the most often answered improperly.
              </li>
              <li>
                <div className="bold">2. All other questions</div>
                Regardless of the specific question, focus on answering the 3 Elemental questions. I use a technique called "Stories" which makes answering any question a breeze.
              </li>
              <li>
                <div className="bold">3. Your questions for them</div>
                This is your chance to put an exclamation point on the interview.
              </li>
            </ol>
            <Link to="/interview/">Learn more →</Link>
          </li>
          <li>
            <figure role="presentation" dangerouslySetInnerHTML={{__html: svgHandshake}} />
            <h3>4. Sometimes you need to follow up</h3>
            <p>It can be awkward, but it's often the difference between sitting on someone's "to do" list and getting the offer.</p>
            <Link to="/follow-up/">Learn more →</Link>
          </li>
        </ol>
      </section>
    </Fragment>
  );
}

export default Homepage;