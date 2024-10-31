import { InGame } from '../../GameStep2_inGame/InGame';
import { ToggleGameScreen } from '../../Global';
import {IPlayerHandlerProps} from './PlayerHandler.d'

export function PlayerHandler(event: IPlayerHandlerProps) {
  const inputElement = event.target.parentElement.children[1] as HTMLInputElement;
  const { value } = inputElement;
  const playerNames = value.split(' ');

  playerNames.forEach((name, index) => {
    playerNames[index] = name.charAt(0).toUpperCase() + name.slice(1);
  });

  const uppercasePlayerNames = playerNames.join(' ');

  const player1 = '🖥️ The House';
  const player2 = `${uppercasePlayerNames || 'Nameless Ned'}`;

  const playerArray = [player1, player2];

  InGame(playerArray);

  ToggleGameScreen('playerSignIn', true);

}
