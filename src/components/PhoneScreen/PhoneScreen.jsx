import React from 'react';

import {Link} from 'react-router-dom';
import svgPhone from 'assets/phone.svg';

import './styles';

const PhoneScreen = function({children}) {
  return (
    <div className="content sbs">
      <div className="sbs__summary">
        <figure role="presentation" dangerouslySetInnerHTML={{__html: svgPhone}} />
        <div className="sbs-summary__text">
          <h2>Phone Screen Summary</h2>
          <p>For the phone screen make sure to:</p>
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
        <h2>The basics?</h2>
        <p>A phone screen allows an employer to verify that a candidate matches their résumé and to get more information.</p>
        <h2>Practice common technical questions</h2>
        <p>One of the most common aspects of a phone screen is to attempt to verify your technical abilities. It's much easier to lie on a résumé than in a conversation. Many times this leads employers to rely on "gotcha" questions, i.e. superficial questions which often don't reflect the real world. This is unfortunate but unavoidable.</p>
        <p>Look up common technical questions for your industry, practice answering them. If you're on a phone screen and don't know the answer to a question make sure to write it down and go back and practice it later.</p>
        <h2>Be professional and interesting</h2>
        <p>Because phone screen interviews are so short it's more important than ever to have a good first impression. Being prompt and talk clearly. Practice starting to answer immediately, regardless of if you know the answer.</p>
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