import { CreatePlayer } from "../../Classes/CreatePlayers";
import { RollForPosition } from "../RollForPosition/RollForPosition";

const scoreBoardHolder = document.getElementById('scoreBoard');
let scoreBoardPlayerName: NodeListOf<HTMLHeadingElement> | undefined = scoreBoardHolder?.querySelectorAll('h4');
let scoreBoardRollPointsSpan = scoreBoardHolder?.querySelectorAll('p > span');

export function PopulatePositioninBoard(players: string[]) {
  players.forEach((element: string, index: number) => {
    let player = new CreatePlayer();

    player.name = element;
    player.rollPosition = index;
    player.rollPoints = 0;

    scoreBoardPlayerName[index].innerText = player.name;
    Number(scoreBoardRollPointsSpan[index].innerHTML = player.rollPoints.toString());
  });

  RollForPosition();
}
