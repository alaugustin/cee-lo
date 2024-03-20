import { StartGame } from './Modules/StartGame';

const ceeLo = {
  projectData: {
    version: '1.1',
    author: 'Al Augustin',
    project: 'Cee-Lo web dice game',
    Date: '2021',
  },

  // -------------------- INITIALIZATION --------------------
  init: function () {
    // CALL DOM INVOKING FUNCTIONS HERE --------------------
    ceeLo.onDomReady();
  },

  onDomReady: () => {
    console.log(ceeLo);

    StartGame();
  },
};

// -------------------- LOAD init() --------------------
window.addEventListener('load', () => {
  ceeLo.init();
});
