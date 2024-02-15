import { PopulatePlayerBoard } from "./RollForPosition/PopulatePlayerBoard";

const playerSignInInput = document.getElementById("nameInput");
const playButton = document.getElementById("playButton");
const playerSignInHolder = document.getElementById('playerSignIn');
const rollForPositionHolder = document.getElementById('rollForPosition');

const logPlayer = (event: any) => {
  let { value } = event.target.parentElement.children[1];

  PopulatePlayerBoard(
    ["The House",
    value ? value : "Nameless Ned"]
  );

  playerSignInHolder?.classList.add('hidden');
  rollForPositionHolder?.classList.remove('hidden');
};

export function PlayerSignIn() {
  playerSignInInput?.focus();
  playButton?.addEventListener("click", logPlayer);
};
