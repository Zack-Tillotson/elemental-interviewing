import React from 'react';
import styles from './styles';

export default function() {
  return (
    <footer>
      <div className="content">
        <h4>Check out my other content</h4>
        <ul className="topics-list">
          <li><a href="https://docs.google.com/presentation/d/1nS5D_lTiQ9XX45JATcpKeKm-gDC9wpI0KTakmZ55DaY/edit?usp=sharing">React Performance</a></li>
          <li><a href="https://docs.google.com/presentation/d/1HD8e3tD29NNdvQNkxBqxGen8IJ11UT5D7Y6uraVc074/edit?usp=sharing">Web Components</a></li>
          <li><a href="https://docs.google.com/presentation/d/13h3WhJ_OUIwB8X7fQ07KUkYZ9R0NXF4HJ5FMOC72Cxs/edit?usp=sharing">PWAs</a></li>
          <li><a href="https://docs.google.com/presentation/d/1XMtlZupjySN1EO1MZGWau7th2UwWOX5UcDDz6JiaRkE/edit?usp=sharing">Iterators, Generators, and Sagas</a></li>
          <li><a href="https://docs.google.com/presentation/d/1x7aqADCehLCgjfYErO9yPKiA8h5V7X1HsNXWdqLpGjA/edit?usp=sharing">JS Debugging</a></li>
          <li><a href="https://diskdraft.com">DiskDraft</a></li>
          <li><a href="http://ZacheryTillotson.com">Personal Homepage</a></li>
          <li><a href="https://github.com/Zack-Tillotson">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/zacherytillotson/">LinkedIn</a></li>
          <li><a href="http://www.laowaigonewild.com/">Chinese History</a></li>
          <li><a href="http://zackandtanya.com/">Wedding</a></li>
        </ul>
        <p className="by-line">
          Happily created by <a className="link--decorated" href="http://ZacheryTillotson.com">Zack Tillotson</a>. I wish you luck!
        </p>
        <p className="by-line">
          Written with React & Redux, using a static site generator. Code can be found on GitHub: <a className="link--decorated" href="https://github.com/Zack-Tillotson/elemental-interviewing">Elemental Interviewing Repository</a>
        </p>
      </div>
    </footer>
  );
}