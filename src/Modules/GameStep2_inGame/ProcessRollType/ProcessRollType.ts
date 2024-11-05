import { GlobalGameData, PopulateWinnerName, IsLastPlayer, RoundOrGame } from '../../Global';
import { ToggleGameScreen, UpdatePlayerHolder } from '../../Global';
import { IProcessRollTypeProps } from './ProcessRollType.d';

const gameWinnerHolder = document.getElementById('gameWinnerHolder');
const gameLossHolder = document.getElementById('gameLossHolder');

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

  const handlePlayerWin = (playerData: { name: string; wins: number; rollPosition: number; rollPoints: number; rollCode: number }) => {
    ToggleGameScreen('gameboard', true);
    handleWinData(playerData);
    UpdatePlayerHolder(gameWinnerHolder, playerData);
    RoundOrGame('round'); // TODO: develop condition for round or game
    ToggleGameScreen('endScreen', false);
  }

  const handlePlayerLoss = (playerData: { name: string; wins: number; rollPosition: number; losses: number; rollPoints: number; rollCode: number }) => {
    handleLossData(playerData);
    UpdatePlayerHolder(gameLossHolder, playerData);
  }

  switch (rollType) {
    case '4,5,6':
      localGlobalData();

      GlobalGameData.playerData.forEach((player: any) => {
        if (player.name !== currentPlayerData.name) {
          handlePlayerLoss(player);

        } else {
          handlePlayerWin(player);

        }
      });
      break;
    case '1,2,3':
      localGlobalData();

      GlobalGameData.playerData.forEach((player: any) => {
        if (player.name !== currentPlayerData.name) {
          handlePlayerWin(player);

        } else {
          handlePlayerLoss(player);

        }
      });
      break;
    default:
      IsLastPlayer(currentPlayerData, playersLength, playerData);
  }
}
