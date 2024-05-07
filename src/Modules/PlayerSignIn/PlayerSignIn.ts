import { GameBoard } from '../GameBoard/GameBoard';

const playerSignInInput: HTMLElement = document.getElementById('nameInput');
const playButton: HTMLElement = document.getElementById('playButton');
const playerSignInHolder: HTMLElement = document.getElementById('playerSignIn');
const gameBoardHolder: HTMLElement = document.getElementById('gameboard');

const logPlayer = (event: any) => {
  const { value } = event.target.parentElement.children[1];
  const playerNames = value.split(' ');

  playerNames.forEach((name: string, index: string | number) => {
    playerNames[index] = name.charAt(0).toUpperCase() + name.slice(1);
  });

  const uppercasePlayerNames = playerNames.join(' ');

  GameBoard(
    ['The House',
      uppercasePlayerNames ? uppercasePlayerNames : 'Nameless Ned']
  );

  playerSignInHolder?.classList.add('hidden');
  gameBoardHolder?.classList.remove('hidden');
};

export function PlayerSignIn() {
  playerSignInInput?.focus();
  playButton?.addEventListener('click', logPlayer);
}
