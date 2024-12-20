import { ToggleGameScreen } from '../../../GlobalHelperFunc';
import { PostGame } from '../../../GameStep3_postGame/PostGame';
import { ICompareScoresProps } from '../CompareScores.d';

export function DetermineWinner(
  playerWin: ICompareScoresProps,
  playerLoss: ICompareScoresProps
) {
  setTimeout(() => {
    ToggleGameScreen('gameboard', true);

    PostGame(playerWin, playerLoss);

    ToggleGameScreen('endScreen', false);
  }, 750);
}
