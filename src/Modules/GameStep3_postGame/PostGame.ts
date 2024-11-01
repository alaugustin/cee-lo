import { AdvanceGameRound, UpdatePlayerHolder } from '../Global';

const gameWinnerHolder = document.getElementById('gameWinnerHolder');
const gameLossHolder = document.getElementById('gameLossHolder');

const processPlayerWin = (
  winningPlayer: {
    wins: number;
    name: string;
    rollPosition: number;
  },
  opposingPlayer: {
    rollPosition: number;
  }) => {
  winningPlayer.wins += 1;
  winningPlayer.rollPosition = 1;
  opposingPlayer.rollPosition = 2;

  AdvanceGameRound(winningPlayer);
};

export function PostGame(playerWin: any, playerLoose: any) {
  processPlayerWin(playerWin, playerLoose);

  UpdatePlayerHolder(gameWinnerHolder, playerWin);
  UpdatePlayerHolder(gameLossHolder, playerLoose);

  console.log(`${playerWin.name} wins by type`);
}
