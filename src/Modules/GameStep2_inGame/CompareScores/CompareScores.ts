import { DisableAllButtons, ToggleGameScreen, HandlePlayerResult } from '../../Global';
import { DetermineWinner } from './DetermineWinner/DetermineWinner';
import { HandleTieEvent } from './HandleTieEvent/HandleTieEvent';
import { ICompareScoresProps } from './CompareScores.d';

export function CompareScores(playerDataArray: ICompareScoresProps[]) {
  const player1 = { ...playerDataArray[0], win: 0, rollPosition: 1 };
  const player2 = { ...playerDataArray[1], win: 0, rollPosition: 2 };

  DisableAllButtons();

  if (player1.rollCode > player2.rollCode) {
    DetermineWinner(player1, player2);

    HandlePlayerResult(player1, true);
    HandlePlayerResult(player2, false);

  } else if (player1.rollCode < player2.rollCode) {
    DetermineWinner(player2, player1);

    HandlePlayerResult(player1, false);
    HandlePlayerResult(player2, true);

  } else {
    if (player1.rollPoints > player2.rollPoints) {
      DetermineWinner(player1, player2);

      HandlePlayerResult(player1, true);
      HandlePlayerResult(player2, false);

    } else if (player1.rollPoints < player2.rollPoints) {
      DetermineWinner(player2, player1);

      HandlePlayerResult(player1, false);
      HandlePlayerResult(player2, true);

    } else {
      setTimeout(() => {
        ToggleGameScreen('gameboard', true);
        ToggleGameScreen('winLossHolder', true);
        HandleTieEvent(player1);

        ToggleGameScreen('tieHolder', false);
        ToggleGameScreen('endScreen', false);
        HandleTieEvent(player2);
      }, 750);
    }
  }
}
