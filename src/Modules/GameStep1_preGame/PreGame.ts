import { ToggleGameScreen } from '../Global';
import { PlayerHandler } from './PlayerHandler/PlayerHandler';
import { IPreGameProps } from './PreGame.d';

export function PreGame(data: IPreGameProps) {
  ToggleGameScreen('startScreen', false); // show start screen

  data.startButton.addEventListener('click', () => {
    ToggleGameScreen('startScreen', true);

    setTimeout(() => {
      data.playerSignInInput.focus();
    }, 0);

    ToggleGameScreen('playerSignIn', false);
  });

  setTimeout(() => {
    data.playerSignInInput.focus();
  }, 0);

  data.playButton.addEventListener('click', (event: any) => {
    PlayerHandler(event);
  });
}
