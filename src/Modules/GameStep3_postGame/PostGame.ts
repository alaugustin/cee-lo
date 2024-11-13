import { UpdatePlayerHolder } from '../Global';
import { ProcessPlayerWin } from './ProcessPlayerWin/ProcessPlayerWin';
import { IPostGameProps } from './PostGame.d';

const gameWinnerHolder = document.getElementById('gameWinnerHolder') as HTMLElement;
const gameLossHolder = document.getElementById('gameLossHolder') as HTMLElement;

export function PostGame(
  playerWin: IPostGameProps,
  playerLoose: IPostGameProps
) {
  ProcessPlayerWin(playerWin, playerLoose)

  UpdatePlayerHolder(gameWinnerHolder, {
    name: playerWin.name,
    rollPoints: playerWin.rollPoints,
    rollCode: playerWin.rollCode
  });
  UpdatePlayerHolder(gameLossHolder, {
    name: playerLoose.name,
    rollPoints: playerLoose.rollPoints,
    rollCode: playerLoose.rollCode
  });

  console.log(playerWin, playerLoose);
}
