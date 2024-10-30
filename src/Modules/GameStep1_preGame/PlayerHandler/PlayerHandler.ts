import { InGame } from '../../GameStep2_inGame/InGame';

export function PlayerHandler(event: any) {
  const { value } = event.target.parentElement.children[1];
  const playerNames = value.split(' ');
  const uppercasePlayerNames = playerNames.join(' ');
  const player1 = '🖥️ Player 1: The House';
  const player2 = `🧍 Player 2: ${uppercasePlayerNames || 'Nameless Ned'}`;
  const playerArray = [player1, player2];

  playerNames.forEach((name: string, index: string | number) => {
    playerNames[index] = name.charAt(0).toUpperCase() + name.slice(1);
  });

  InGame(playerArray);

  console.log(`
    - load player 1 (House) and player 2 data to game board as array
      - populate player names on game board
  `);
}
