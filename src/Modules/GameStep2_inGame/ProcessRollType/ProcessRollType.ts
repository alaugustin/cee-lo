import { IsLastPlayer } from '../../Global';
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

  currentPlayerData.rollType = rollType;
  IsLastPlayer(currentPlayerData, playersLength, playerData);

  // todo: functionality for game round and game rounds for multiple rounds
  // const localGlobalData = () => {
  //   console.log('Game round: ', GlobalGameData.gameRound, 'of ', GlobalGameData.gameRounds);
  // };
}
