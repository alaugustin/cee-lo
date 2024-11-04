import { UpdatePlayerHolder } from '../Global';
import { ProcessPlayerWin } from './ProcessPlayerWin/ProcessPlayerWin';

const gameWinnerHolder = document.getElementById('gameWinnerHolder');
const gameLossHolder = document.getElementById('gameLossHolder');

export function PostGame(playerWin: any, playerLoose: any) {
  ProcessPlayerWin(playerWin, playerLoose)

  UpdatePlayerHolder(gameWinnerHolder, playerWin);
  UpdatePlayerHolder(gameLossHolder, playerLoose);
}
