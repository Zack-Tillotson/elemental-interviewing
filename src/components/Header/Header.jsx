import React, {useState} from 'react';
import styles from './styles';
import classnames from 'classnames';

import {Link, withRouter} from 'react-router-dom';

import svgLogo from 'assets/logo.svg';

import routes from 'routes';

function Header({preferencesOpen, location}) {
  const [isMenuExpanded, updateIsMenuExpanded] = useState(false);
  const onTriggerClick = () => updateIsMenuExpanded(!isMenuExpanded);
  const onMenuClick = () => updateIsMenuExpanded(false);
  return (
    <header className="page-header">
      <div className="logo">
        <Link to="/">
          <figure role="presentation">
            <span dangerouslySetInnerHTML={{__html: svgLogo}} />
            <figcaption role="presentation">Elemental Interviewing</figcaption>
          </figure>
        </Link>
      </div>
      <a href="#footer" className="menu-trigger" role="button" aria-haspopup={true} onClick={onTriggerClick}>
        Menu
      </a>
      <nav aria-expanded={isMenuExpanded} className={classnames('main-nav', {'main-nav--expanded': isMenuExpanded})}>
        <button className="close-trigger" onClick={onTriggerClick}>
          ×
        </button>
        <ul>
          {routes
            .filter(route => !route.isNavExcluded)
            .map(route =>
              <li key={route.path}>
                <Link to={route.path} className={classnames('nav-link', {'route--active': route.path === location.pathname})} onClick={onMenuClick}>
                  <figure role="presentation">
                    <img className="nav-link__logo" src={route.icon} />
                    <figcaption role="presentation">
                      <h2>{route.title}</h2>
                      <p>{route.subtitle}</p>
                    </figcaption>
                  </figure>
                </Link>
              </li>
            )}
        </ul>
      </nav>
    </header>
  );
}

export default withRouter(Header);