import React from 'react';

import {Link} from 'react-router-dom';
import InstallPrompt from '../InstallPrompt';
import Markdown from 'react-markdown';

import './styles';

import getContent from 'getContent';

const Resume = function({children, fields}) {
  const nextPageLink = fields.nextPageLink ? getContent(fields.nextPageLink.sys.id) : null;
  return (
    <div className="content sbs">

      <InstallPrompt className="sbs__install" />

      <div className="sbs__title">
        <h1>{fields.title}</h1>
      </div>

      <div className="sbs__summary">
        <img className="nav-link__logo" src={fields.image.fields.file.url} alt={fields.image.fields.description} />
        <div className="sbs-summary__text">
          <h2>In Summary</h2>
          <p>{fields.summary}</p>
        </div>
      </div>

      <div className="sbs__checklist">
        <h3>Checklist:</h3>
        <ol>
          {fields.summaryChecklist.map((word, index) => (
            <li key={word}><input type="checkbox" id={index} /><label htmlFor={index}>{word}</label></li>
          ))}
        </ol>
      </div>

      <div className="sbs__content">
        <Markdown source={fields.body} />
      </div>
      {nextPageLink &&
        <div className="sbs__footer">
          <Link to={nextPageLink.fields.href}>Next: {nextPageLink.fields.linkTitle} →</Link>
        </div>
      }
    </div>
  );
}

export default Resume;