import React from 'react';
import styles from './styles';

import {Link} from 'react-router-dom';

export default function Header({preferencesOpen}) {
  return (
    <header>
      <Link to="/">
        <h1>
          <div className="imageContainer">
            <img src="/assets/logo.png" alt="Element Interviewing" />
          </div>
        </h1>
      </Link>
    </header>
  );
}