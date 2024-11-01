import { AdvanceGameRound } from '../Global';

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

const funcNameTBD = (playerHolder: HTMLElement, playerData: { name: string; rollPoints: number }) => {
  console.log(playerHolder);
  playerHolder.innerText = `${playerData.name} rolled a ${playerData.rollPoints}`;
};

export function PostGame(playerWin: any, playerLoose: any) {
  processPlayerWin(playerWin, playerLoose);

  funcNameTBD(gameWinnerHolder, playerWin);
  funcNameTBD(gameLossHolder, playerLoose);

  console.log(`${playerWin.name} wins by type`);
}
