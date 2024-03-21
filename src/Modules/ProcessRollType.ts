import { IsLastPlayer } from './Global';

export const ProcessRollType = (
  rollType: string,
  playerData: any[],
  rollPoint: number,
  rollArray_string: string, // CAN BE RMOVED
  rollCode: number,
  rollTypeHolder: HTMLElement,
  rollPointHolder: HTMLElement,
  currentPlayerData: any,
  playersLength: number
) => {
  // ----- relevant code below -----
  currentPlayerData.rollCode = rollCode;
  currentPlayerData.rollPoints = rollPoint;

  rollTypeHolder.innerHTML = rollType;
  rollPointHolder.innerHTML = rollPoint.toString();

  IsLastPlayer(currentPlayerData, playersLength, playerData);

  //console.log(`rollArray_string, ${rollArray_string}`); // TODO: REMOVE THIS LINE
}
