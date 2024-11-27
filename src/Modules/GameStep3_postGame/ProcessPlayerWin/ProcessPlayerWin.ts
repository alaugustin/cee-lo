import { AdvanceGameRound } from '../../Global';
import {
  IPlayerProps,
  IOpposingPlayerProps
} from './ProcessPlayerWin.d';

export function ProcessPlayerWin(
  winningPlayer: IPlayerProps,
  opposingPlayer: IOpposingPlayerProps
): void {
  winningPlayer.win += 1;
  winningPlayer.rollPosition = 1;
  opposingPlayer.rollPosition = 2;

  AdvanceGameRound(winningPlayer);
}
