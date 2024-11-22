import { PreGame } from './Modules/GameStep1_preGame/PreGame';

const ceeLo = {
  projectData: {
    version: '1.1',
    author: 'Al Augustin',
    project: 'Cee-Lo web dice game',
    date: '2024',
    preGameData: {
      startButton: document.getElementById('startButton'),
      playButton: document.getElementById('playButton'),
      playerSignInInput: document.getElementById('nameInput')
    },
  },

  // -------------------- INITIALIZATION --------------------
  init: function () {
    // CALL DOM INVOKING FUNCTIONS HERE --------------------
    ceeLo.onDomReady();
  },

  onDomReady: () => {
    const { preGameData } = ceeLo.projectData;
    PreGame({
      data: ceeLo.projectData,
      startButton: preGameData.startButton,
      playerSignInInput: preGameData.playerSignInInput as HTMLInputElement,
      playButton: preGameData.playButton
    });
  },
};

// -------------------- LOAD init() --------------------
window.addEventListener('load', () => {
  ceeLo.init();
});
