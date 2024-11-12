import { InGame } from '../../GameStep2_inGame/InGame';
import { ToggleGameScreen } from '../../Global';
import { IPlayerHandlerProps } from './PlayerHandler.d';

export function PlayerHandler(event: IPlayerHandlerProps) {
  const inputElement = event.target.parentElement.children[1] as HTMLInputElement;
  const constructedPlayerName = inputElement.value.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' '); inputElement.value;

  const playerNames = constructedPlayerName;

  const playerArray = ['The House', playerNames || 'Nameless Ned'];

  InGame(playerArray);
  ToggleGameScreen('playerSignIn', true);
}
