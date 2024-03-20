import { ProcessRollType } from './ProcessRollType';

export function RollHandler(
  playersLength: number,
  rollArray_string: string,
  rollTypeHolder: HTMLElement,
  rollPointHolder: HTMLElement,
  currentPlayerData: any,
  die1: number,
  die2: number,
  die3: number
) {
  // ------- 456
  const processFourFiveSix = () => {
    const rollCode = 3;
    const rollPoint = 100;

    ProcessRollType('4,5,6', rollPoint, rollArray_string, rollCode, rollTypeHolder, rollPointHolder, currentPlayerData, playersLength);
  };

  const fourFiveSix = () => {
    rollArray_string === '4,5,6' ? processFourFiveSix() : oneTwoThree();
  };

  // ------- 123
  const processOneTwoThree = () => {
    const rollCode = 0;
    const rollPoint = -100;

    ProcessRollType('1,2,3', rollPoint, rollArray_string, rollCode, rollTypeHolder, rollPointHolder, currentPlayerData, playersLength);
  };

  const oneTwoThree = () => {
    rollArray_string === '1,2,3' ? processOneTwoThree() : trips();
  };

  // ------- TRIPS
  const processTrips = () => {
    const rollCode = 2;
    const rollPoint = die1;

    ProcessRollType('Trips', rollPoint, rollArray_string, rollCode, rollTypeHolder, rollPointHolder, currentPlayerData, playersLength);
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
      console.log('Roll again') :
      ProcessRollType('Points Roll', rollPoint, rollArray_string, rollCode, rollTypeHolder, rollPointHolder, currentPlayerData, playersLength);
  };

  fourFiveSix();
}
