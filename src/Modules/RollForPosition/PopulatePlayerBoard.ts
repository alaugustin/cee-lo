import { PlayerObj } from '../../Classes/CreatePlayers';
import { ScoreboardCard } from '../../Templates/Templates';
import { PlayersRoll } from '../PlayersRoll';
import { CompareScores } from '../CompareScores';
import { ShowWinner } from '../ShowWinner';
import { RollDice } from '../Global';

const scoreBoardHolder: HTMLElement | null = document.getElementById('scoreBoardHolder');

export function PopulatePlayerBoard(players: string[]) {
  const reversedPlayersArray: string[] = players.reverse();
  const playerDataArray: any[] = [];

  reversedPlayersArray.forEach((playerName: string, index: number) => {
    const player: PlayerObj = new PlayerObj();

    player.name = playerName;
    player.rollPosition = index;
    player.rollPoints = 0;
    player.wins = null;
    player.losses = null;

    playerDataArray.push(player);

    return (
      scoreBoardHolder.innerHTML += ScoreboardCard(index, player.name, player.rollPoints)
    );
  });

  const scoreboardButtons: NodeListOf<Element> = document.querySelectorAll('#scoreBoardHolder button');

  console.log(playerDataArray);

  scoreboardButtons.forEach((button: HTMLElement) => {
    button.addEventListener('click', (event: Event | any) => {

      RollDice(event);
    });
  });

  PlayersRoll('testing -');
  CompareScores('testing -');
  ShowWinner('testing -');
}
