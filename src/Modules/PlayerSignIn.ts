import { PopulatePlayerBoard } from './RollForPosition/PopulatePlayerBoard';

const playerSignInInput: HTMLElement = document.getElementById('nameInput');
const playButton: HTMLElement = document.getElementById('playButton');
const playerSignInHolder: HTMLElement = document.getElementById('playerSignIn');
const gameBoardHolder: HTMLElement = document.getElementById('gameboard');

const logPlayer = (event: any) => {
  const { value } = event.target.parentElement.children[1];

  PopulatePlayerBoard(
    ['The House',
    value ? value : 'Nameless Ned']
  );

  playerSignInHolder?.classList.add('hidden');
  gameBoardHolder?.classList.remove('hidden');
};

export function PlayerSignIn() {
  playerSignInInput?.focus();
  playButton?.addEventListener('click', logPlayer);
}
