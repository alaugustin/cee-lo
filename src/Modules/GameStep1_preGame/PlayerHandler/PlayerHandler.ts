import { ToggleGameScreen } from '../../Global';
import { InGame } from '../../GameStep2_inGame/InGame';
import { IPlayerHandlerProps } from './PlayerHandler.d';

export function PlayerHandler(event: IPlayerHandlerProps) {
  const inputElement = event.target.parentElement.children[1] as HTMLInputElement;
  const inputValue = inputElement.value;

  const constructedPlayerName = inputValue.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ');

  const playerArray = ['The House', constructedPlayerName || 'Nameless Ned'];

  InGame({playerArray});
  ToggleGameScreen('playerSignIn', true);
}
