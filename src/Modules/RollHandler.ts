import { rollTypeTreatment } from './Global';

export function RollHandler(rollArray_string: string, rollPointHolder: HTMLElement, currentPlayerData: any, die1: number, die2: number, die3: number) {
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
}
