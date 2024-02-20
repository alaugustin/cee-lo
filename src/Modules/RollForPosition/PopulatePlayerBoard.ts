import { CreatePlayer } from "../../Classes/CreatePlayers";
import { RollForPosition } from "./RollForPosition";
import { ScoreboardCard } from "../../Templates/Templates";

const scoreBoardHolder: HTMLElement | null = document.getElementById('scoreBoardHolder');

export function PopulatePlayerBoard(players: string[]) {
  const reversedPlayersArray: string[] = players.reverse();

  reversedPlayersArray.forEach((playerName: string, index: number) => {
    let player = new CreatePlayer();

    player.name = playerName;
    player.rollPosition = index;
    player.rollPoints = 0;

    return (
      scoreBoardHolder.innerHTML += ScoreboardCard(index, player.name, player.rollPoints)
    );
  });

  RollForPosition();
}
