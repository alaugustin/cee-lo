import { PostGame } from '../../GameStep3_postGame/PostGame';
import { DisableAllButtons, GlobalGameData, ToggleGameScreen } from '../../Global';
import { ICompareScoresProps } from './CompareScores.d';

const determineWinner = (playerWin: ICompareScoresProps, playerLoss: ICompareScoresProps) => {
  ToggleGameScreen('gameboard', true);
  PostGame(playerWin, playerLoss);
  ToggleGameScreen('endScreen', false);
}

export function CompareScores(playerDataArray: ICompareScoresProps[]) {
  const player1 = { ...playerDataArray[0], wins: 0, rollPosition: 1 };
  const player2 = { ...playerDataArray[1], wins: 0, rollPosition: 2 };

  DisableAllButtons();

  // console.log(`
  //   - player 2 button roll
  //     • 456: player immediately wins
  //     • trips: store point to compare player 1 point and player 2 point
  //     • points: store point to compare player 1 point and player 2 point
  //     • 123: player 1 instant loss
  // `);

  if (player1.rollCode > player2.rollCode) {
    determineWinner(player1, player2);

  } else if (player1.rollCode < player2.rollCode) {
    determineWinner(player2, player1);

  } else {
    if (player1.rollPoints > player2.rollPoints) {
      determineWinner(player1, player2);

    } else if (player1.rollPoints < player2.rollPoints) {
      determineWinner(player2, player1);

    } else {
      console.log('tie - roll again, stay in same round');
      // console.log('first player rolls again');
      // console.log('Game round: ', GlobalGameData.gameRound);
      // console.log('Player data: ', playerDataArray);
    }
  }
}
