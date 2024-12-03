import { PreGame } from './Modules/GameStep1_preGame/PreGame';
import {
  StartButton,
  PlayButton,
  PlayerSignInInput
} from './Modules/GlobalHTMLElements';

const ceeLo = {
  projectData: {
    version: '1.1',
    author: 'Al Augustin',
    project: 'Cee-Lo web dice game',
    date: '2024',
  },

  // -------------------- INITIALIZATION --------------------
  init: function () {
    // CALL DOM INVOKING FUNCTIONS HERE --------------------
    ceeLo.onDomReady();
  },

  onDomReady: () => {
    PreGame({
      data: ceeLo.projectData,
      startButton: StartButton,
      playerSignInInput: PlayerSignInInput,
      playButton: PlayButton
    });
  },
};

// -------------------- LOAD init() --------------------
window.addEventListener('load', () => {
  ceeLo.init();
});
