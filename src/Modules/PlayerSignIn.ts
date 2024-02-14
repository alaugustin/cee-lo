
import { RollForPosition } from "./RollForPosition";
import { PlayersRoll } from "./PlayersRoll";
import { CompareScores } from "./CompareScores";
import { ShowWinner } from "./ShowWinner";

const playerSignInInput = document.getElementById("nameInput");
const playButton = document.getElementById("playButton");

const logPlayer = (event: any) => {
  let { value } = event.target.parentElement.children[1];

  value ? console.log(value) : console.log('Nameless');
};

export function PlayerSignIn() {
  playerSignInInput?.focus();
  playButton?.addEventListener("click", logPlayer);  

  RollForPosition('testing -');
  PlayersRoll('testing -');
  CompareScores('testing -');
  ShowWinner('testing -');
};
