import { StartGame } from './Modules/StartGame/StartGame';

const ceeLo = {
  projectData: {
    version: '1.1',
    author: 'Al Augustin',
    project: 'Cee-Lo web dice game',
    Date: '2021',
    globalGameData: {
      gameRound: 0,
      gameRounds: 3,
    }
  },

  // -------------------- INITIALIZATION --------------------
  init: function () {
    // CALL DOM INVOKING FUNCTIONS HERE --------------------
    ceeLo.onDomReady();
  },

  onDomReady: () => {
    const { globalGameData } = ceeLo.projectData;

    StartGame(globalGameData);
  },
};

// -------------------- LOAD init() --------------------
window.addEventListener('load', () => {
  ceeLo.init();
});
