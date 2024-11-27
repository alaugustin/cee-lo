import {
  UpdatePlayerHolder,
  GameWinnerHolder,
  GameLossHolder
} from '../Global';
import { ProcessPlayerWin } from './ProcessPlayerWin/ProcessPlayerWin';
import { IPostGameProps } from './PostGame.d';

export function PostGame(
  playerWin: IPostGameProps,
  playerLoose: IPostGameProps
) {
  ProcessPlayerWin(playerWin, playerLoose)

  UpdatePlayerHolder(GameWinnerHolder, {
    name: playerWin.name,
    rollPoints: playerWin.rollPoints,
    rollCode: playerWin.rollCode
  });

  UpdatePlayerHolder(GameLossHolder, {
    name: playerLoose.name,
    rollPoints: playerLoose.rollPoints,
    rollCode: playerLoose.rollCode
  });
}
