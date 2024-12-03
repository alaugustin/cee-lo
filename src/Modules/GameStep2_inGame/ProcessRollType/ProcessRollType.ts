import {
  GlobalGameData,
  IsLastPlayer,
  HandlePlayerResult
} from '../../Global';
import { IProcessRollTypeProps } from './ProcessRollType.d';

export const ProcessRollType = ({
  rollType,
  playerData,
  rollPoint,
  rollCode,
  rollTypeHolder,
  rollPointHolder,
  currentPlayerData,
  playersLength
}: IProcessRollTypeProps) => {

  currentPlayerData.rollCode = rollCode;
  currentPlayerData.rollPoints = rollPoint;

  rollTypeHolder.innerHTML = rollType;
  rollPointHolder.innerHTML = rollPoint.toString();

  // todo: functionality for game round and game rounds for multiple rounds
  // const localGlobalData = () => {
  //   console.log('Game round: ', GlobalGameData.gameRound, 'of ', GlobalGameData.gameRounds);
  // };

  switch (rollType) {
    case '4,5,6':
      currentPlayerData.rollType = rollType;
      IsLastPlayer(currentPlayerData, playersLength, playerData);
      break;
    case '1,2,3':
      currentPlayerData.rollType = rollType;
      IsLastPlayer(currentPlayerData, playersLength, playerData);
      break;
    default:
      currentPlayerData.rollType = rollType;
      IsLastPlayer(currentPlayerData, playersLength, playerData);
  }
}
