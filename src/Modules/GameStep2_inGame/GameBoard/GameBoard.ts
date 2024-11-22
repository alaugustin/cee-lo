import { PlayerObj } from '../../../Classes/CreatePlayers';
import { ScoreboardCard } from '../../../Templates/Templates';
import { PlayerRoll } from '../PlayersRoll/PlayersRoll';
import { GlobalGameData, AutoRollPlayer } from '../../Global';
import { IGameBoardProps } from './GameBoard.d';

const scoreBoardHolder = document.getElementById('scoreBoardHolder') as HTMLElement | null;

export function GameBoard(players: IGameBoardProps) {
  const playerDataArray: PlayerObj[] = [];

  players.forEach((playerName, index) => {
    const player: PlayerObj = new PlayerObj();

    player.name = playerName;
    player.rollPosition = index + 1;
    player.rollType = '';
    player.rollCode = null;
    player.rollPoints = 0;
    player.win = 0;
    player.loss = 0;
    player.tie = 0;

    playerDataArray.push(player);

    return (scoreBoardHolder.innerHTML += ScoreboardCard(
      index,
      player.name,
      player.rollPoints,
      player.rollType
    ));
  });

  GlobalGameData.playerData = playerDataArray;

  PlayerRoll({
    playersData: playerDataArray,
    playersLength: playerDataArray.length
  });

  AutoRollPlayer('#player1'); // auto roll player 1
  console.log('auto roll player 1');

}
