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

  switch (rollType) {
    case '4,5,6':
      // code block
      console.log('do 4,5,6 stuff');
      console.log('populate roll code on current player and game board', rollCode);
      console.log('populate roll point on current player and game board', rollPoint);
      console.log('increase current player win by 1', currentPlayerData);
      console.log('alert player win');
      break;
    case '1,2,3':
        // code block
      console.log('do 1,2,3 stuff');
      console.log('populate roll code on other player and game board', rollCode);
      console.log('populate roll point on other player and game board', rollPoint);
      console.log('increase other player win by 1');
      console.log('alert player loss');
      break;
    default:
    // code block
    IsLastPlayer(currentPlayerData, playersLength, playerData);
  }
}
