import { PlayerObj } from "../../Classes/CreatePlayers";
import { RollForPosition } from "./RollForPosition";
import { ScoreboardCard } from "../../Templates/Templates";

const scoreBoardHolder: HTMLElement | null = document.getElementById('scoreBoardHolder');

export function PopulatePlayerBoard(players: string[]) {
  const reversedPlayersArray: string[] = players.reverse();

  reversedPlayersArray.forEach((playerName: string, index: number) => {
    let player: PlayerObj = new PlayerObj();

    player.name = playerName;
    player.rollPosition = index;
    player.rollPoints = 0;
    player.wins = null;
    player.losses = null;

    return (
      scoreBoardHolder.innerHTML += ScoreboardCard(index, player.name, player.rollPoints)
    );
  });

  RollForPosition();
}
