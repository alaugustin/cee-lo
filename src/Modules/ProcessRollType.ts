import { IsLastPlayer } from './Global';

export const ProcessRollType = (
  rollType: string,
  playerData: any[],
  rollPoint: number,
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
}
