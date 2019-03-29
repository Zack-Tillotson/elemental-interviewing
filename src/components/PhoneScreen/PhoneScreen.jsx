import React from 'react';

import {Link} from 'react-router-dom';

import './styles';

const PhoneScreen = function({children}) {
  return (
    <div className="content sbs">
      <div className="sbs__summary">
        <figure role="presentation">
          <img className="nav-link__logo" src="/assets/mascot.png" />
        </figure>
        <div className="sbs-summary__text">
          <h2>Summary of phone screening</h2>
          <p>The phone screen is a type of initial interview where an employer tries to ensure a candidate is worth bring in for a full interview. Because they are short and technical you should focus on a good first impression. You can't answer everything perfectly, but be confident and proactive in responding.</p>
          <p>In short:</p>
          <ol>
            <li>Practice common technical questions</li>
            <li>Be professional</li>
            <li>Be interesting</li>
            <li>Ask about the job</li>
          </ol>
        </div>
      </div>
      <div className="sbs__title">
        <h1>How to pass a Phone Screen</h1>
      </div>
      <div className="sbs__content">
        <h2>Is it possible to practice for?</h2>
        <p>A phone screen allows an employer to verify that a candidate matches their résumé and to get more information. They aren't trying to trick you, they are trying to spend as little time as possible to figure out if you're worth continueing to talk to. This leads us to great strategies for phone screens.</p>
        <h2>Practice common technical questions</h2>
        <p>One of the most common aspects of a phone screen is to attempt to verify your technical abilities. It's much easier to lie on a résumé than in a conversation. Many times this leads employers to rely on "gotcha" questions, i.e. superficial questions which often don't reflect the real world. This is unfortunate but unavoidable.</p>
        <p>Look up common technical questions for your industry, practice answering them. If you're on a phone screen and don't know the answer to a question make sure to write it down and go back and practice it later.</p>
        <h2>Be professional and interesting</h2>
        <p>Because phone screen interviews are so short it's more important than ever to have a good first impression. Being prompt and talk clearly. Practice starting to answer immediately, regardless of if you know the answer.</p>
        <p>For example, if you are asked "This architetural position uses Revit, how do you prepare a site presentation in Revit?". Assuming you don't know the answer, you don't want to answer "I don't know." because they will assume you don't know anything. A better answer might be "I worked with Revit at Company X doing this other thing, I'm not sure about preparing site presentations but I'm sure I could learn it quickly.".</p>
        <h2>Ask about the job</h2>
        <p>You are screening the job too, so use this time to ask a few questions that help you understand the job better.</p>
      </div>
      <div className="sbs__footer">
        <Link to="/interview/">Next: In Person Interview →</Link>
      </div>
    </div>
  );
}

export default PhoneScreen;