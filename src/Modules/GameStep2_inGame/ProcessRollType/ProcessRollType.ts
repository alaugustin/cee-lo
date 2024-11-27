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

  const localGlobalData = () => {
    console.log('Game round: ', GlobalGameData.gameRound, 'of ', GlobalGameData.gameRounds);
  };

  switch (rollType) {
    case '4,5,6':
      localGlobalData();
      GlobalGameData.playerData.forEach(player => {
        if (player.name !== currentPlayerData.name) {
          player.rollType = null;
          HandlePlayerResult(player, false);
        } else {
          player.rollType = rollType;
          HandlePlayerResult(player, true);
        }
      });
      break;
    case '1,2,3':
      localGlobalData();
      GlobalGameData.playerData.forEach(player => {
        if (player.name !== currentPlayerData.name) {
          player.rollType = null;
          HandlePlayerResult(player, true);
        } else {
          player.rollType = null;
          HandlePlayerResult(player, false);
        }
      });
      break;
    default:
      currentPlayerData.rollType = rollType;
      IsLastPlayer(currentPlayerData, playersLength, playerData);
  }
}
