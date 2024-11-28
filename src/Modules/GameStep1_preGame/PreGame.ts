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

  playerSignInInput.addEventListener('keyup', function () {
    const currentValueLength = playerSignInInput.value.length;
    const regEx1 = /[^a-zA-Z\s]+/;

    if (currentValueLength > 0) {
      playerSignInInput.value = playerSignInInput.value.replace(regEx1, '');
    }
  });

  playButton.addEventListener('click', (event: any) => {
    PlayerHandler(event);
  });

  document.addEventListener('keydown', function (event: KeyboardEvent) {
    if (event.keyCode === 13) {
      const target = event.target as HTMLElement;
      PlayerHandler({
        event,
        target,
        name: '',
        index: 0
      });
    }
  });
}
