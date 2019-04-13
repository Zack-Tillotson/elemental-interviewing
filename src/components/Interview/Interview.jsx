import React from 'react';

import {Link} from 'react-router-dom';

import svgLogo from 'assets/flamo-interview.svg';

import './styles';

const Interview = function({children}) {
  return (
    <div className="content sbs">
      <div className="sbs__title">
        <h1>How to interview</h1>
      </div>
      <div className="sbs__summary">
        <figure role="presentation">
          <span className="nav-link__logo" dangerouslySetInnerHTML={{__html: svgLogo}} />
        </figure>
        <div className="sbs-summary__text">
          <h2>In Summary</h2>
          <p>Interviewing is stressful, but preparation makes all the difference. Make sure to pratice standard questions like "Tell me about yourself". Then prepare for questions you can't predict by having a set of stories ready to answer with, these stories should represent great answers to the 3 Elemental questions. Finally be ready to interview them in turn.</p>
          <p>In short:</p>
          <ol>
            {['Focus on the 3 Elemental questions', 'Answer "tell me about yourself"', 'Have 5+ stories', 'Pratice using the stories to answer', 'Have questions for them'].map((word, index) => (
              <li key={word}><input type="checkbox" id={index} /><label htmlFor={index}>{word}</label></li>
            ))}
          </ol>
        </div>
      </div>
      <div className="sbs__content">
        <h2>Why is it so hard?</h2>
        <p>Interviewing is the hardest part of the hiring process. It's a stressful test, you're being judged by strangers who only have a basic understanding of your skills, and it's not something that's practiced very often. The Elemental system helps with all of this!</p>
        <p>Interviewing is like dancing, it's frustrating when you're bad but after you know the basics and practice it becomes fun.</p>
        <h2>Remember the 3 Elemental questions</h2>
        <p>All you have to do in an interview is answer the 3 Elemental questions, everything you do should be focused on that.</p>
        <h2>"Tell me about yourself"</h2>
        <p>Most interviews start with this question so it's important to understand how to answer it.</p>
        <p>Pretend they asked you "Why should we hire you for this position?". Your goal should be to summarize your experience and the reasons they should hire you. Don't be too wordy with your answer, it's just a starting point for the conversation.</p>
        <p>Come to the interview with this answer ready - write it out before hand. It should be 3-6 sentences and tell the interviewer what area your expertise is in.</p>
        <h2>A simple trick to answer any question: Stories</h2>
        <p>A story here is a situation from your experiences in work (ideal), school, or anywhere in your life which demonstrates a good answer to one or more of the 3 Elemental Questions. "Can you do the job?", "Will you do the job?", and "Are you annoying?"</p>
        <p>A story can be used to answer any question. Because we know that interviewers are really trying to answer the 3 Elemental Questions if we answer with a story that addresses them it will be a successful answer.</p>
        <h2>An example Story</h2>
        <p>Let's say you have a geat story about a time when you worked late to finish a hard task. This story addresses at least 2 Elemental questions - "Can you do the job?" because it was a hard task and you finished it, and "Will you do the job?" because you showed extra committment to getting the task finished. Let's see how you could answer two very different questions with this story.</p>
        <p className="bold">Question 1: "What is your greatest weakness?"</p>
        <p>Your answer: My biggest weakness is knowing when to ask for help, I used to be very dependent on working within a team. I've been getting better at that though, recently for example I ran in to a difficult task at work that was taking a long time. I stayed late and got it done though, I think finding a healthy balance between being a team player and being able to finish work yourself is important.</p>
        <p className="bold">Question 2: "Where do you see yourself in 5 years?"</p>
        <p>Your answer: In 5 years I see myself in a more senior version of this position. I enjoy being challenged and see myself taking on more and more difficult tasks. For example I recently ran in to a difficult task at work that was taking a long time, I stayed late and finished it. Over the next 5 years those problems will become easier and so I'll be able to do even more challenging tasks going forward.</p>
        <p>This is obviously a very simple example but I think demonstrates the approach.</p>
        <h2>How to prepare Stories</h2>
        <p>Preparing your stories should be one of the biggest tasks before an interview. You should have at least 5 stories that cover the most important parts of your résumé and your stories together should answer all 3 Elemental Questions. Practice answering common interview questions with any and each of the stories, during the actual interview you can cycle through your stories natually.</p>
        <h2>Technical questions</h2>
        <p>Any interview will include questions specific to the job. The interviewer is using them to guage your skill level, so a partial answer is better than "I don't know". When you're not sure talk about what you do know. Try to pivot to something you're more comfortable talking about.</p>
        <p>For a simple example if you're asked "How do you change a flat tire on a car?" and you don't know, you could answer "I haven't changed a flat tire before but I've replaced my car's oil". You're demonstrating knowledge in the area of the question even if you don't know that specific answer.</p>
        <h2>Your questions for them</h2>
        <p>Start a conversation, don't check a box.</p>
        <p>Use the "First Date" strategy - ask questions which let them talk about things they like.</p>
      </div>
      <div className="sbs__footer">
        <Link to="/follow-up/">Next: Following up →</Link>
      </div>
    </div>
  );
}

export default Interview;