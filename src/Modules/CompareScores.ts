import { AdvanceGameRound, DisableAllButtons, GlobalGameData } from './Global';

const processPlayerWin = (playerToProcess: { wins: number; }) => {
  playerToProcess.wins += 1;
  AdvanceGameRound(playerToProcess);
};

export function CompareScores(playerDataArray: any[]) {
  const player1 = playerDataArray[0];
  const player2 = playerDataArray[1];

  DisableAllButtons();

  if (player1.rollCode > player2.rollCode) {
    console.log('player 1 wins by type');
    processPlayerWin(player1);
  } else if (player1.rollCode < player2.rollCode) {
    console.log('player 2 wins by type');
    processPlayerWin(player2);
  } else {
    if (player1.rollPoints > player2.rollPoints) {
      console.log('player 1 wins by points');
      processPlayerWin(player1);
    } else if (player1.rollPoints < player2.rollPoints) {
      console.log('player 2 wins by points');
      processPlayerWin(player2);
    } else {
      console.log('tie - roll again, stay in same round');
      console.log('first player rolls again');
      console.log('Game round: ', GlobalGameData.gameRound);
      console.log('Player data: ', playerDataArray);
    }
  }
}
