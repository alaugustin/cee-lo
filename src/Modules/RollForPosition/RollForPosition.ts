import { PlayersRoll } from "../PlayersRoll";
import { CompareScores } from "../CompareScores";
import { ShowWinner } from "../ShowWinner";
import { RollDice } from "../Global";

export function RollForPosition() {
  let scoreboardButtons = document.querySelectorAll('#scoreBoardHolder button');

  scoreboardButtons.forEach((button: HTMLElement) => {
    button.addEventListener('click', (event: Event | any) => {
      const playerDiceHolders = event.target.parentElement.querySelectorAll('.diceHolder > div');

      RollDice(event);
    });
  });

  PlayersRoll("testing -");
  CompareScores("testing -");
  ShowWinner("testing -");
}
