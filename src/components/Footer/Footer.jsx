import React from 'react';
import styles from './styles';

export default function() {
  return (
    <footer>
      <div className="content">
        <h4>Check out my other content</h4>
        <section className="topics-list">
          <h5>Personal</h5>
          <a href="http://ZacheryTillotson.com">Homepage</a>
          <a href="https://diskdraft.com">DiskDraft</a>
          <a href="http://www.laowaigonewild.com/">Laowai Gone Wild</a>
          <a href="http://zackandtanya.com/">Wedding</a>
          <h5>Professional</h5>
          <a href="https://github.com/Zack-Tillotson">GitHub</a>
          <a href="https://www.linkedin.com/in/zacherytillotson/">LinkedIn</a>
          <a href="https://docs.google.com/presentation/d/1nS5D_lTiQ9XX45JATcpKeKm-gDC9wpI0KTakmZ55DaY/edit?usp=sharing">React Performance</a>
          <a href="https://docs.google.com/presentation/d/1HD8e3tD29NNdvQNkxBqxGen8IJ11UT5D7Y6uraVc074/edit?usp=sharing">Web Components</a>
          <a href="https://docs.google.com/presentation/d/13h3WhJ_OUIwB8X7fQ07KUkYZ9R0NXF4HJ5FMOC72Cxs/edit?usp=sharing">PWAs</a>
          <a href="https://docs.google.com/presentation/d/1XMtlZupjySN1EO1MZGWau7th2UwWOX5UcDDz6JiaRkE/edit?usp=sharing">Iterators, Generators, and Sagas</a>
          <a href="https://docs.google.com/presentation/d/1x7aqADCehLCgjfYErO9yPKiA8h5V7X1HsNXWdqLpGjA/edit?usp=sharing">JS Debugging</a>
        </section>
        <p className="by-line">
          Written with React & Redux, using a custom static site generator. Code can be found on GitHub: <a className="link--decorated" href="https://github.com/Zack-Tillotson/elemental-interviewing">Elemental Interviewing Repository</a>. Some icons made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> and are licensed under CC BY 3.0.
        </p>
        <p className="by-line">
          Created by <a className="link--decorated" href="http://ZacheryTillotson.com">Zack Tillotson</a>. I enjoy the interview "game" and made this site because I love helping people. Good luck!
        </p>
      </div>
    </footer>
  );
}