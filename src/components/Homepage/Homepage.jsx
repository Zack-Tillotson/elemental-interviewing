import React, {Fragment} from 'react';

import {Link} from 'react-router-dom';
import InstallPrompt from '../InstallPrompt';
import Markdown from 'react-markdown';

import getContent from 'getContent';

import './styles';

const Homepage = function({children, fields}) {

  return (
    <Fragment>
      <header className="homepage__header">
        <div className="content">
          <h1>{fields.title}</h1>
          <p className="bragging">
            {fields.subtitle}
          </p>
        </div>
      </header>
      <InstallPrompt className="content" />
      <section className="content elemental-questions">
        <img
          alt={fields.topImage.fields.title}
          className="elemental-questions__logo"
          src={fields.topImage.fields.file.url}
        />
        <Markdown source={fields.topContent} className="top-content"/>
      </section>
      <section className="content">
        <Markdown source={fields.bodyContent} />

        <ol className="process-overview">
          {fields.pageLinks.map((link, index) => {
            const linkItem = getContent(link.sys.id);
            return (
              <li key={index}>
                <Link to={linkItem.fields.href} className="process-overview__stage">
                  <span className="process-overview__num">{index + 1}. </span>
                  <span className="process-overview__text">{linkItem.fields.linkTitle}</span>
                  <span className="process-overview__next">→</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </Fragment>
  );
}

export default Homepage;