import React from 'react';
import styles from './styles';

import {Link} from 'react-router-dom';

export default function Header({preferencesOpen}) {
  return (
    <header>
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
          <li>
            <Link to="/introduction/" className="nav-link">
              <figure role="presentation">
                <img className="nav-link__logo" src="/assets/fire.png" />
                <figcaption role="presentation">
                  <h2>Introduction</h2>
                  <p>Anyone can interview well</p>
                </figcaption>
              </figure>
            </Link>
          </li>
          <li>
            <Link to="/elemental-questions/" className="nav-link">
              <figure role="presentation">
                <img className="nav-link__logo" src="/assets/water.png" />
                <figcaption role="presentation">
                  <h2>Questions</h2>
                  <p>The 3 Elemental questions</p>
                </figcaption>
              </figure>
            </Link>
          </li>
          <li>
            <Link to="/story-answers" className="nav-link">
              <figure role="presentation">
                <img className="nav-link__logo" src="/assets/wind.png" />
                <figcaption role="presentation">
                  <h2>Answers</h2>
                  <p>Using stories</p>
                </figcaption>
              </figure>
            </Link>
          </li>
          <li>
            <Link to="/about-us/" className="nav-link">
              <figure role="presentation">
                <img className="nav-link__logo" src="/assets/plant.png" />
                <figcaption role="presentation">
                  <h2>About Us</h2>
                  <p>Follow this strategy, get a job!</p>
                </figcaption>
              </figure>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}