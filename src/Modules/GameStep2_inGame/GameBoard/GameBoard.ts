import { PlayerObj } from '../../../Classes/CreatePlayers';
import { ScoreboardCard } from '../../../Templates/Templates';
import { PlayerRoll } from '../PlayersRoll/PlayersRoll';
import { GlobalGameData } from '../../Global';
import { TheRollHandler } from '../RollHandler/RollHandler';
import { IGameBoardProps } from './GameBoard.d';


const scoreBoardHolder: HTMLElement | null = document.getElementById('scoreBoardHolder');

export function GameBoard(players: IGameBoardProps) {
  const playerDataArray: PlayerObj[] = [];

  players.forEach((playerName: string, index: number) => {
    const player: PlayerObj = new PlayerObj();

    player.name = playerName;
    player.rollPosition = index + 1;
    player.rollType = '';
    player.rollCode = null;
    player.rollPoints = 0;
    player.wins = null;
    player.losses = null;

    playerDataArray.push(player);

    return (scoreBoardHolder.innerHTML += ScoreboardCard(
      index,
      player.name,
      player.rollPoints,
      player.rollType
    ));
  });

  GlobalGameData.playerData = playerDataArray;

  PlayerRoll({ playersData: playerDataArray, playersLength: playerDataArray.length });

  const button = document.querySelector('#player1 button');
  console.log(button);

  setInterval(function () {
    if (button instanceof HTMLElement) {
      button.click();
    }
  }, 1000);

  console.log(`
    - player 2 button roll
      • 456: player immediately wins
      • trips: store point to compare player 1 point and player 2 point
      • points: store point to compare player 1 point and player 2 point
      • 123: player 1 instant loss
  `);

  // TheRollHandler(1, true);

  // TheRollHandler(2, false);

  // HideGameScreen('gameboard');

  // PostGame();


}
