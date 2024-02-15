import { CreatePlayer } from "../../Classes/CreatePlayers";
import { RollForPosition } from "./RollForPosition";
import { ScoreboardCard } from "../../Templates/Templates";

const scoreBoardHolder: HTMLElement | null = document.getElementById('scoreBoardHolder');

export function PopulatePlayerBoard(players: string[]) {
  const reversedPlayersArray = players.reverse();

  reversedPlayersArray.forEach((element: string, index: number) => {
    let player = new CreatePlayer();

    player.name = element;
    player.rollPosition = index;
    player.rollPoints = 0;

    return (
      scoreBoardHolder.innerHTML += ScoreboardCard(index, player.name, player.rollPoints)
    );
  });

  RollForPosition();
}
