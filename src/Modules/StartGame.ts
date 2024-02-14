import { EnterPlayers } from "./EnterPlayers";
import { RollForPosition } from "./RollForPosition";
import { PlayersRoll } from "./PlayersRoll";
import { CompareScores } from "./CompareScores";
import { ShowWinner } from "./ShowWinner";

const startButton = document.getElementById('startButton');

const startGame = () => {
  console.log('startButton clicked')
}

export function StartGame() {
  startButton.addEventListener("click", startGame);

  EnterPlayers('testing -');
  RollForPosition('testing -');
  PlayersRoll('testing -');
  CompareScores('testing -');
  ShowWinner('testing -');
};
