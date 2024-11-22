import { IPlayerProps } from './ProcessPlayerWin.d';
import { IOpposingPlayerProps } from './ProcessPlayerWin.d';
import { AdvanceGameRound } from '../../Global';

export function ProcessPlayerWin(
  winningPlayer: IPlayerProps,
  opposingPlayer: IOpposingPlayerProps
): void {
  winningPlayer.win += 1;
  winningPlayer.rollPosition = 1;
  opposingPlayer.rollPosition = 2;

  AdvanceGameRound(winningPlayer);
}
