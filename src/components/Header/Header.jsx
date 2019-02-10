import React from 'react';
import styles from './styles';

import {Link} from 'react-router-dom';

export default function Header({preferencesOpen}) {
  return (
    <header>
      <Link to="/">
        <h1 className="logo">
          <img src="/assets/logo.png" alt="Element Interviewing" />
        </h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/about-us" className="nav-link">
              <figure role="presentation">
                <img className="nav-link__logo" src="/assets/Fire.svg" />
                <figcaption role="presentation">
                  <h2>About Us</h2>
                  <p>We're loud and proud</p>
                </figcaption>
              </figure>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}