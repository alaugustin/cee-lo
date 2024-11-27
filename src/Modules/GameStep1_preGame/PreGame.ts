import { ToggleGameScreen } from '../Global';
import { PlayerHandler } from './PlayerHandler/PlayerHandler';
import { IPreGameProps } from './PreGame.d';

export function PreGame(data: IPreGameProps) {
  const {
    startButton,
    playerSignInInput,
    playButton
  } = data;

  ToggleGameScreen('startScreen', false); // show start screen

  startButton.addEventListener('click', () => {
    ToggleGameScreen('startScreen', true);

    setTimeout(() => {
      playerSignInInput.focus();
    }, 0);

    ToggleGameScreen('playerSignIn', false);
  });

  setTimeout(() => {
    playerSignInInput.focus();
  }, 0);

  playButton.addEventListener('click', (event: any) => {
    PlayerHandler(event);
  });
}
