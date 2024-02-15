import { CreatePlayer } from "../../Classes/CreatePlayers";
import { RollForPosition } from "./RollForPosition";

const scoreBoardHolder: HTMLElement | null = document.getElementById('scoreBoardHolder');

export function PopulatePlayerBoard(players: string[]) {
  const reversedPlayersArray = players.reverse();

  reversedPlayersArray.forEach((element: string, index: number) => {
    let player = new CreatePlayer();

    player.name = element;
    player.rollPosition = index;
    player.rollPoints = 0;

    return (
      scoreBoardHolder.innerHTML += `
        <div>
          <h3>Player ${index + 1}</h3>
          <h4>${player.name}</h4>
          <p>Roll Points: <span>${player.rollPoints}</span></p>
          <button class="border-solid border-2">ROLL</button>
        </div>
      `
    );
  });

  RollForPosition();
}
