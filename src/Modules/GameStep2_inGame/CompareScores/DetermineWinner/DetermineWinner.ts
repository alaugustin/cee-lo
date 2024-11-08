import { ToggleGameScreen } from '../../../Global';
import { PostGame } from '../../../GameStep3_postGame/PostGame';
import { ICompareScoresProps } from '../CompareScores.d';

export function DetermineWinner(playerWin: ICompareScoresProps, playerLoss: ICompareScoresProps) {
  setTimeout(() => {
    console.log('DetermineWinner()');
    ToggleGameScreen('gameboard', true);
    PostGame(playerWin, playerLoss);
    ToggleGameScreen('endScreen', false);
  }, 750);
}
