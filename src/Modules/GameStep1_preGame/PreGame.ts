import { ToggleGameScreen } from '../Global';
import { PlayerHandler } from './PlayerHandler/PlayerHandler';

export function PreGame(data: any) {
  ToggleGameScreen('startScreen', false);

  data.startButton.addEventListener('click', () => {
    ToggleGameScreen('startScreen', true);
    ToggleGameScreen('playerSignIn', false);

    setTimeout(() => {
      data.playerSignInInput.focus();
    }, 0);
  }
  );

  setTimeout(() => {
    data.playerSignInInput.focus();
  }, 0);

  data.playButton.addEventListener('click', (event: any) => {
    PlayerHandler(event);

    ToggleGameScreen('playerSignIn', true);
    ToggleGameScreen('gameboard', false);
  });
}
