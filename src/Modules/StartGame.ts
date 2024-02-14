import { PlayerSignIn } from "./PlayerSignIn";
import { threeDbuttonStyling } from "./Global";

const startButton = document.getElementById('startButton');
const startScreenHolder = document.getElementById('startScreen');
const playerSignInHolder = document.getElementById('playerSignIn');

threeDbuttonStyling.map(
  (styleClass) => {
    startButton?.classList.add(styleClass);
  }
);

const startGame = () => {
  startScreenHolder?.classList.add('hidden');
  playerSignInHolder?.classList.remove('hidden');
  PlayerSignIn();  
}

export function StartGame() {
  startButton?.addEventListener("click", startGame);
};
