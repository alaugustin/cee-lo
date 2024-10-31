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
    const {preGameData} = ceeLo.projectData;

    PreGame(preGameData);
  },
};

// -------------------- LOAD init() --------------------
window.addEventListener('load', () => {
  ceeLo.init();
});
