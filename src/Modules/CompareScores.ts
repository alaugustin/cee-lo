import { ThreeDbuttonStylingDisabled } from './Global';
import { ShowWinner } from './ShowWinner';
import { GlobalGameData } from './Global';

export function CompareScores(playerDataArray: any[]) {
  const playerButton = document.querySelectorAll('.playerColumn button');

  playerButton.forEach((button: Element) => {
    button.setAttribute('disabled', 'disabled');
    button.className = '';
    button.classList.add(...ThreeDbuttonStylingDisabled);
  });

  console.log('last player. compare scores now');

  const player1 = playerDataArray[0];
  const player2 = playerDataArray[1];

  if (player1.rollCode > player2.rollCode) {
    console.log('player 1 wins by type');
    player1.wins += 1;
  } else if (player1.rollCode < player2.rollCode) {
    console.log('player 2 wins by type');
    player2.wins += 1;
  } else if (player1.rollCode === player2.rollCode) {
    if (player1.rollPoints > player2.rollPoints) {
      console.log('player 1 wins by points');
      player1.wins += 1;
    } else if (player1.rollPoints < player2.rollPoints) {
      console.log('player 2 wins by points');
      player2.wins += 1;
    } else if (player1.rollPoints === player2.rollPoints) {
      console.log('tie - roll again, stay in same round');
      console.log(playerDataArray);
    }
  }

  console.log(GlobalGameData);
}

ShowWinner('testing -');
