import { PlayerSignIn } from "./PlayerSignIn";
import { threeDbuttonStyling } from "./Global";

const startButton: HTMLElement = document.getElementById('startButton');
const startScreenHolder: HTMLElement = document.getElementById('startScreen');
const playerSignInHolder: HTMLElement = document.getElementById('playerSignIn');

const startGame = () => {
  startScreenHolder?.classList.add('hidden');
  playerSignInHolder?.classList.remove('hidden');

  PlayerSignIn();
}

export function StartGame() {
  startButton?.addEventListener("click", startGame);
};
