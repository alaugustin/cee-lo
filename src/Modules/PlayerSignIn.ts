
import { RollForPosition } from "./RollForPosition";
import { PlayersRoll } from "./PlayersRoll";
import { CompareScores } from "./CompareScores";
import { ShowWinner } from "./ShowWinner";

const playerSignInInput = document.getElementById("nameInput");
const playButton = document.getElementById("playButton");

let players = {
  player1 : {
    name: 'House'
  },
  player2 : {
    name: 'UNCHANGED DATA'
  }
}

const player2Name = (playerName: string) => {
  return players.player2.name = playerName;
};

const logPlayer = (event: any) => {
  let { value } = event.target.parentElement.children[1];

  value ? player2Name(value) : player2Name('Nameless Ned');
};

export function PlayerSignIn() {
  playerSignInInput?.focus();
  playButton?.addEventListener("click", logPlayer);

  RollForPosition('testing -');
  PlayersRoll('testing -');
  CompareScores('testing -');
  ShowWinner('testing -');
};
