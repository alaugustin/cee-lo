import { PlayerObj } from '../../Classes/CreatePlayers';
import { ScoreboardCard } from '../../Templates/Templates';
import { PlayerRoll } from '../PlayersRoll/PlayersRoll';
import { GlobalGameData } from '../Global';
import {IGameBoardProps} from './GameBoard.d';

const scoreBoardHolder: HTMLElement | null = document.getElementById('scoreBoardHolder');

export function GameBoard(players: IGameBoardProps) {
  const reversedPlayersArray: string[] = players.reverse();
  const playerDataArray: PlayerObj[] = [];

  reversedPlayersArray.forEach((playerName: string, index: number) => {
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

  PlayerRoll(playerDataArray, playerDataArray.length);
}
