import { InGame } from '../../GameStep2_inGame/InGame';
import { ToggleGameScreen } from '../../Global';

export function PlayerHandler(event: any) {
  const { value } = event.target.parentElement.children[1];
  const playerNames = value.split(' ');

  playerNames.forEach((name: string, index: string | number) => {
    playerNames[index] = name.charAt(0).toUpperCase() + name.slice(1);
  });

  const uppercasePlayerNames = playerNames.join(' ');

  const player1 = '🖥️ The House';
  const player2 = `${uppercasePlayerNames || 'Nameless Ned'}`;

  const playerArray = [player1, player2];

  InGame(playerArray);

  ToggleGameScreen('playerSignIn', true);
}
