import { UpdatePlayerHolder } from '../Global';
import { ProcessPlayerWin } from './ProcessPlayerWin/ProcessPlayerWin';

const gameWinnerHolder = document.getElementById('gameWinnerHolder') as HTMLElement;
const gameLossHolder = document.getElementById('gameLossHolder') as HTMLElement;

export function PostGame(playerWin: any, playerLoose: any) {
  ProcessPlayerWin(playerWin, playerLoose)

  UpdatePlayerHolder(gameWinnerHolder, playerWin);
  UpdatePlayerHolder(gameLossHolder, playerLoose);
}
