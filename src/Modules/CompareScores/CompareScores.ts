import { AdvanceGameRound, DisableAllButtons, GlobalGameData } from '../Global';

const processPlayerWin = (
  winningPlayer: {
    wins: number;
    name: any;
    rollPosition: number;
  },
  opposingPlayer: {
    rollPosition: number;
  }) => {
  winningPlayer.wins += 1;
  winningPlayer.rollPosition = 1;
  opposingPlayer.rollPosition = 2;

  AdvanceGameRound(winningPlayer);
};

export function CompareScores(playerDataArray: any[]) {
  const player1 = playerDataArray[0];
  const player2 = playerDataArray[1];

  DisableAllButtons();

  if (player1.rollCode > player2.rollCode) {
    console.log(`${player1.name} wins by type`);
    processPlayerWin(player1, player2);

  } else if (player1.rollCode < player2.rollCode) {
    console.log(`${player1.name} wins by type`);
    processPlayerWin(player2, player1);

  } else {
    if (player1.rollPoints > player2.rollPoints) {
      console.log(`${player1.name} wins by points`);
      processPlayerWin(player1, player2);

    } else if (player1.rollPoints < player2.rollPoints) {
      console.log(`${player2.name} wins by points`);
      processPlayerWin(player2, player1);

    } else {
      console.log('tie - roll again, stay in same round');
      console.log('first player rolls again');
      console.log('Game round: ', GlobalGameData.gameRound);
      console.log('Player data: ', playerDataArray);
    }
  }
}
