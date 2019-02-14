import React from 'react';
import styles from './styles';

import {Link, withRouter} from 'react-router-dom';

import routes from 'routes';

function Header({preferencesOpen, location}) {
  return (
    <header className="page-header">
      <div className="logo">
        <Link to="/">
          <figure role="presentation">
            <img src="/assets/Logo.svg" alt="Elemental Interviewing" />
            <figcaption role="presentation">Elemental Interviewing</figcaption>
          </figure>
        </Link>
      </div>
      <nav>
        <ul>
          {routes
            .filter(route => !route.isNavExcluded)
            .map(route =>
              <li key={route.path}>
                <Link to={route.path} className={`nav-link ${route.path === location.pathname ? 'route--active' : ''}`}>
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