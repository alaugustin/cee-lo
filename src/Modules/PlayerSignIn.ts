import { PopulatePlayerBoard } from './RollForPosition/PopulatePlayerBoard';

const playerSignInInput: HTMLElement = document.getElementById('nameInput');
const playButton: HTMLElement = document.getElementById('playButton');
const playerSignInHolder: HTMLElement = document.getElementById('playerSignIn');
const scoreboardHolder: HTMLElement = document.getElementById('scoreboard');

const logPlayer = (event: any) => {
  const { value } = event.target.parentElement.children[1];

  PopulatePlayerBoard(
    ['The House',
    value ? value : 'Nameless Ned']
  );

  playerSignInHolder?.classList.add('hidden');
  scoreboardHolder?.classList.remove('hidden');
};

export function PlayerSignIn() {
  playerSignInInput?.focus();
  playButton?.addEventListener('click', logPlayer);
}
