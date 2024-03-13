import { PlayerObj } from '../Classes/CreatePlayers';
import { ScoreboardCard } from '../Templates/Templates';
import { PlayerRoll } from './PlayersRoll';

const scoreBoardHolder: HTMLElement | null = document.getElementById('scoreBoardHolder');

export function PopulatePlayerBoard(players: string[]) {
  const reversedPlayersArray: string[] = players.reverse();
  const playerDataArray: any[] = [];

  reversedPlayersArray.forEach((playerName: string, index: number) => {
    const player: PlayerObj = new PlayerObj();

    player.name = playerName;
    player.rollPosition = index;
    player.rollCode = null;
    player.rollPoints = 0;
    player.wins = null;
    player.losses = null;

    playerDataArray.push(player);

    return (
      scoreBoardHolder.innerHTML += ScoreboardCard(index, player.name, player.rollPoints)
    );
  });

  PlayerRoll(playerDataArray);
}
