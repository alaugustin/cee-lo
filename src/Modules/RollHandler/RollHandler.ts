import { ProcessRollType } from '../GameStep2_inGame/ProcessRollType/ProcessRollType';
import { DisableAllButtons } from '../Global';
import { IRollHandlerProps } from './RollHandler.d';

export function RollHandler({
  playersData,
  playersLength,
  rollArray_string,
  rollTypeHolder,
  rollPointHolder,
  currentPlayerData,
  die1,
  die2,
  die3
}: IRollHandlerProps) {
  // ------- 456
  const processFourFiveSix = () => {
    const rollCode = 3;
    const rollPoint = 10;

    DisableAllButtons();
    ProcessRollType({
      rollType: '4,5,6',
      playerData: playersData,
      rollPoint: rollPoint,
      rollCode: rollCode,
      rollTypeHolder: rollTypeHolder,
      rollPointHolder: rollPointHolder,
      currentPlayerData: currentPlayerData,
      playersLength: playersLength
    });
  };

  const fourFiveSix = () => {
    rollArray_string === '4,5,6' ? processFourFiveSix() : oneTwoThree();
  };

  // ------- 123
  const processOneTwoThree = () => {
    const rollCode = 0;
    const rollPoint = 0;

    DisableAllButtons();
    ProcessRollType({
      rollType: '1,2,3',
      playerData: playersData,
      rollPoint: rollPoint,
      rollCode: rollCode,
      rollTypeHolder: rollTypeHolder,
      rollPointHolder: rollPointHolder,
      currentPlayerData: currentPlayerData,
      playersLength: playersLength
    });
  };

  const oneTwoThree = () => {
    rollArray_string === '1,2,3' ? processOneTwoThree() : trips();
  };

  // ------- TRIPS
  const processTrips = () => {
    const rollCode = 2;
    const rollPoint = die1;

    ProcessRollType({
      rollType: 'Trips',
      playerData: playersData,
      rollPoint: rollPoint,
      rollCode: rollCode,
      rollTypeHolder: rollTypeHolder,
      rollPointHolder: rollPointHolder,
      currentPlayerData: currentPlayerData,
      playersLength: playersLength
    });
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
      ProcessRollType({
        rollType: 'Points Roll',
        playerData: playersData,
        rollPoint: rollPoint,
        rollCode: rollCode,
        rollTypeHolder: rollTypeHolder,
        rollPointHolder: rollPointHolder,
        currentPlayerData: currentPlayerData,
        playersLength: playersLength
      });
  };

  fourFiveSix();
}
