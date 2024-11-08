import { PostGame } from '../../GameStep3_postGame/PostGame';
import { DisableAllButtons, ToggleGameScreen } from '../../Global';
import { ICompareScoresProps } from './CompareScores.d';

const determineWinner = (playerWin: ICompareScoresProps, playerLoss: ICompareScoresProps) => {
  ToggleGameScreen('gameboard', true);
  PostGame(playerWin, playerLoss);
  ToggleGameScreen('endScreen', false);
}

const computerNameHolder = document.getElementById('computerName') as HTMLElement | null;
const playerNameHolder = document.getElementById('playerName') as HTMLElement | null;

const handleTieEvent = (player: ICompareScoresProps) => {
  ToggleGameScreen('winLossHolder', true);

  player.tie += 1;

  (player.name === 'The House') ?
    computerNameHolder.innerText = player.name :
    playerNameHolder.innerText = player.name;

  ToggleGameScreen('tieHolder', false);
}

export function CompareScores(playerDataArray: ICompareScoresProps[]) {
  const player1 = { ...playerDataArray[0], win: 0, rollPosition: 1 };
  const player2 = { ...playerDataArray[1], win: 0, rollPosition: 2 };

  DisableAllButtons();

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
      ToggleGameScreen('gameboard', true);
      handleTieEvent(player1);
      handleTieEvent(player2);
      ToggleGameScreen('endScreen', false);
    }
  }
}
