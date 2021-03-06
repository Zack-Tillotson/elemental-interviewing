// This hook is used to handle PWA installation. It handles the beforeinstallprompt
// event so you don't have to, and exposes nice tools such as a launch/install
// button.
import React, {useState, useEffect} from 'react';

function usePwaInstall() {

  const [installEvent, saveInstallEvent] = useState(null);
  const [installationState, updateInstallationState] = useState('before');

  useEffect(() => {
    const saveEventHandler = function(e) {
      e.preventDefault();
      saveInstallEvent(e);
    }
    const installationFinishedHandler = e => {
      updateInstallationState('installed');
    }

    window.addEventListener('beforeinstallprompt', saveEventHandler);
    window.addEventListener('appinstalled', installationFinishedHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt ', saveEventHandler);
      window.removeEventListener('appinstalled', installationFinishedHandler);
    }
  }, []);

  const triggerInstall = e => {
    if(!!installEvent) {
      installEvent.prompt();
      installEvent.userChoice.then(result => {
        updateInstallationState(result.outcome === 'accepted' ? 'installing' : 'rejected');
        saveInstallEvent(null);
      });
    }
  }

  let installationStatus = '';
  if(installationState === 'before' && !installEvent) installationStatus = "Not currently installable";
  if(installationState === 'before' && !!installEvent) installationStatus = "Ready to install";
  if(installationState === 'installing') installationStatus = "Installing Maze";
  if(installationState === 'installed') installationStatus = "Installation complete";

  return [!!installEvent, triggerInstall, installationStatus];
}

export default usePwaInstall;