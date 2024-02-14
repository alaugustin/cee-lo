
import { RollForPosition } from "./RollForPosition";

const playerSignInInput = document.getElementById("nameInput");
const playButton = document.getElementById("playButton");

const logPlayer = (event: any) => {
  let { value } = event.target.parentElement.children[1];

  // value ? player2Name(value) : player2Name('Nameless Ned');

  RollForPosition(
    "The House",
    value ? value : "Nameless Ned"
  );
};

export function PlayerSignIn() {
  playerSignInInput?.focus();
  playButton?.addEventListener("click", logPlayer);
};
