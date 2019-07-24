import React from 'react';
import usePwaInstall from './usePwaInstall';

import './styles.scss';

function InstallPrompt({className}) {
  const [isInstallable, installCallback] = usePwaInstall();

  if(!isInstallable) {
    return null;
  }

  return (
    <section className={`install-prompt ${className}`}>
      <p className="install-prompt__explanation">Download the Elemental Interviewing app:</p>
      <img className="install-prompt__logo" src="/assets/icons/icon-128.png" alt="Install to Home screen" />
      <h3 className="install-prompt__title">Elemental Interviewing</h3>
      <button className="install-prompt__button" onClick={installCallback}>
        Add to Home screen
      </button>
    </section>
  );
}

export default InstallPrompt;
