import { PlayersRoll } from "../PlayersRoll";
import { CompareScores } from "../CompareScores";
import { ShowWinner } from "../ShowWinner";

export function RollForPosition() {
  let scoreboardButtons = document.querySelectorAll('#scoreBoardHolder button');

  scoreboardButtons.forEach((button: HTMLElement) => {
    button.addEventListener('click', (event: Event | any) => {
      const playerDiceHolders = event.target.parentElement.querySelectorAll('.diceHolder > div');
    });
  });

  PlayersRoll("testing -");
  CompareScores("testing -");
  ShowWinner("testing -");
}
