import { PlayersRoll } from '../PlayersRoll';
import { CompareScores } from '../CompareScores';
import { ShowWinner } from '../ShowWinner';
import { RollDice } from '../Global';

export function RollForPosition() {
  const scoreboardButtons: NodeListOf<Element> = document.querySelectorAll('#scoreBoardHolder button');

  scoreboardButtons.forEach((button: HTMLElement) => {
    button.addEventListener('click', (event: Event | any) => {

      RollDice(event);
    });
  });

  PlayersRoll('testing -');
  CompareScores('testing -');
  ShowWinner('testing -');
}
