import { StartGame } from "./Modules/StartGame";
import { EnterPlayers } from "./Modules/EnterPlayers";
import { RollForPosition } from "./Modules/RollForPosition";
import { PlayersRoll } from "./Modules/PlayersRoll";
import { CompareScores } from "./Modules/CompareScores";
import { ShowWinner } from "./Modules/ShowWinner";

const ceeLo = {
  projectData: {
    version: '1.1',
    author: 'Al Augustin',
    project: 'Cee-Lo web dice game',
    Date: '2021',
  },

  // GLOBAL VARIABLES --------------------
  globalVar: {
    currentYear: new Date().getFullYear(),
  },

  // -------------------- INITIALIZATION --------------------
  init: function () {
    // CALL DOM INVOKING FUNCTIONS HERE --------------------
    ceeLo.onDomReady();
    ceeLo.eventHandlers();
  },

  onDomReady: () => {
    console.log(`onDomReady code here`);
    console.log(ceeLo.globalVar);

    StartGame();
    EnterPlayers();
    RollForPosition();
    PlayersRoll();
    CompareScores();
    ShowWinner();
  },

  // -------------------- HANDLE ALL PAGE LEVEL EVENTS --------------------
  eventHandlers: () => {
    console.log(`eventHandlers code here`);
  },
};

// -------------------- LOAD init() --------------------
window.addEventListener('load', () => {
  ceeLo.init();
});
