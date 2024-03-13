import { CompareScores } from './CompareScores';
import { ShowWinner } from './ShowWinner';
import { rollTypeTreatment } from './Global';

export function PlayerRoll(playersData: any[]) {
  const gameBoardButtons: NodeListOf<Element> = document.querySelectorAll('#scoreBoardHolder button');

  gameBoardButtons.forEach((button: HTMLElement, index: number) => {
    const currentPlayerData = playersData[index];

    button.addEventListener('click', (event: Event | any) => {
      const sides = 6,
        die1 = Math.floor(Math.random() * sides) + 1,
        die2 = Math.floor(Math.random() * sides) + 1,
        die3 = Math.floor(Math.random() * sides) + 1;

      const parentElement = event.target.closest('.playerColumn');
      const dieHolders = parentElement.querySelectorAll('.diceHolder > div');
      const rollPointHolder = parentElement.querySelector('.rollPointHolder');
      const diceArray = [die1, die2, die3];
      const rollArray = diceArray,
        rollArray_sort = rollArray.sort(),
        rollArray_string = rollArray_sort.toString();


      Array.from(dieHolders).forEach((holder: any, index) => {
        const spanElement = holder.querySelector('span') as HTMLElement | null;

        if (spanElement) {
          spanElement.innerHTML = String([die1, die2, die3][index]);
        }
      });

      console.log('---------- ---------- ---------- ---------- ----------');
      // PROCESS ROLL TYPES
      // ------- 456
      const processFourFiveSix = () => {
        const rollCode = 3;
        const rollPoint = 100;

        rollTypeTreatment('4,5,6', rollPoint, rollArray_string, rollCode, rollPointHolder, currentPlayerData);
      };

      const fourFiveSix = () => {
        rollArray_string === '4,5,6' ? processFourFiveSix() : oneTwoThree();
      };

      // ------- 123
      const processOneTwoThree = () => {
        const rollCode = 0;
        const rollPoint = -100;

        rollTypeTreatment('1,2,3', rollPoint, rollArray_string, rollCode, rollPointHolder, currentPlayerData);
      };

      const oneTwoThree = () => {
        rollArray_string === '1,2,3' ? processOneTwoThree() : trips();
      };

      // ------- TRIPS
      const processTrips = () => {
        const rollCode = 2;
        const rollPoint = die1;

        rollTypeTreatment('Trips', rollPoint, rollArray_string, rollCode, rollPointHolder, currentPlayerData);
      };

      const trips = () => {
        (die1 === die2 && die2 === die3) ? processTrips() : point();
      };

      // ------- POINT
      const point = () => {
        const rollCode = 1;
        let rollPoint;

        if (die1 === die2) {
          rollPoint = die3
        } else if (die1 === die3) {
          rollPoint = die2
        } else if (die2 === die3) {
          rollPoint = die1
        } else {
          rollPoint = 0;
        }

        rollPoint === 0 ?
          rollTypeTreatment('Roll again', rollPoint, rollArray_string, rollCode, rollPointHolder, currentPlayerData) :
          rollTypeTreatment('points roll', rollPoint, rollArray_string, rollCode, rollPointHolder, currentPlayerData);
      };

      fourFiveSix();
    });
  });
}

CompareScores('testing -');
ShowWinner('testing -');
