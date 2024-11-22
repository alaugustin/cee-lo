import { GlobalGameData, PopulateWinnerName, IsLastPlayer, RoundOrGame, PopulateWLTBoard } from '../../Global';
import { ToggleGameScreen, UpdatePlayerHolder } from '../../Global';
import { IProcessRollTypeProps, IPlayerWinDataProps, IPlayerLossDataProps, IPlayerResultData } from './ProcessRollType.d';

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
  const playerBoard = document?.querySelectorAll('.playerColumn table');

  playerData.forEach((player, index) => {
    const wltRow = playerBoard[index].childNodes[1].childNodes[2];
    player.wltBoard = wltRow;
  });

  currentPlayerData.rollCode = rollCode;
  currentPlayerData.rollPoints = rollPoint;

  rollTypeHolder.innerHTML = rollType;
  rollPointHolder.innerHTML = rollPoint.toString();

  const localGlobalData = () => {
    console.log('Game round: ', GlobalGameData.gameRound, 'of ', GlobalGameData.gameRounds);
  };

  const handleLossData = (playerData: IPlayerLossDataProps) => {
    playerData.loss += 1;
    playerData.rollPosition = 2;

    PopulateWLTBoard(playerData, false);
  };

  const handleWinData = (playerData: IPlayerWinDataProps) => {
    PopulateWinnerName(playerData.name);

    playerData.win += 1;
    playerData.rollPosition = 1;

    PopulateWLTBoard(playerData, true);
  };

  const handlePlayerResult = (playerData: IPlayerResultData & { wltBoard: HTMLElement }, isWin: boolean) => {
    if (isWin) {
      ToggleGameScreen('gameboard', true);
      handleWinData(playerData);
      UpdatePlayerHolder(gameWinnerHolder, playerData);
      RoundOrGame('round'); // TODO: develop condition for round or game
      ToggleGameScreen('endScreen', false);
    } else {
      handleLossData(playerData);
      UpdatePlayerHolder(gameLossHolder, playerData);
    }
  };

  switch (rollType) {
    case '4,5,6':
      localGlobalData();
      GlobalGameData.playerData.forEach(player => {
        if (player.name !== currentPlayerData.name) {
          player.rollType = null;
          handlePlayerResult(player, false);
        } else {
          player.rollType = rollType;
          handlePlayerResult(player, true);
        }
      });
      break;
    case '1,2,3':
      localGlobalData();
      GlobalGameData.playerData.forEach(player => {
        if (player.name !== currentPlayerData.name) {
          player.rollType = null;
          handlePlayerResult(player, true);
        } else {
          player.rollType = null;
          handlePlayerResult(player, false);
        }
      });
      break;
    default:
      currentPlayerData.rollType = rollType;
      IsLastPlayer(currentPlayerData, playersLength, playerData);
  }
}
