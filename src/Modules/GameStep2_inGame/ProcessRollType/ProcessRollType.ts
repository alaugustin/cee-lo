import { GlobalGameData, PopulateWinnerName, IsLastPlayer, RoundOrGame } from '../../Global';
import { ToggleGameScreen } from '../../Global';
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

  const handleLossData = (playerData: { losses: number; rollPosition: number; }) => {
    playerData.losses += 1;
    playerData.rollPosition = 2;
  };

  const handleWinData = (playerData: { name: string; wins: number; rollPosition: number; }) => {
    PopulateWinnerName(playerData.name);

    playerData.wins += 1;
    playerData.rollPosition = 1;
  };

  switch (rollType) {
    case '4,5,6':
      localGlobalData();

      GlobalGameData.playerData.forEach((player: any) => {
        if (player.name !== currentPlayerData.name) {
          handleLossData(player);
        } else {
          ToggleGameScreen('gameboard', true);
          handleWinData(player);
          RoundOrGame('round'); // TODO: develop condition for round or game
          ToggleGameScreen('endScreen', false);
        }
      });
      break;
    case '1,2,3':
      localGlobalData();

      GlobalGameData.playerData.forEach((player: any) => {
        if (player.name !== currentPlayerData.name) {
          ToggleGameScreen('gameboard', true);
          handleWinData(player);
          RoundOrGame('round'); // TODO: develop condition for round or game
          ToggleGameScreen('endScreen', false);
        } else {
          handleLossData(player);
        }
      });
      break;
    default:
      IsLastPlayer(currentPlayerData, playersLength, playerData);
  }
}
