import { GlobalGameData, HideShowWinnerHolder, IsLastPlayer } from './Global';

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
  currentPlayerData.rollCode = rollCode;
  currentPlayerData.rollPoints = rollPoint;

  rollTypeHolder.innerHTML = rollType;
  rollPointHolder.innerHTML = rollPoint.toString();


  const localGlobalData = () => {
    console.log('Game round: ', GlobalGameData.gameRound, 'of ', GlobalGameData.gameRounds);
  };

  const handleLossData = (playerData: { losses: number; rollPosition: number; }) => {
    console.log(playerData);

    playerData.losses += 1;
    playerData.rollPosition = 2;
  };

  const handleWinData = (playerData: { name: string; wins: number; rollPosition: number; }) => {
    console.log(playerData);
    HideShowWinnerHolder(playerData.name);

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
          handleWinData(player);

        }
      });
      console.log(playerData);
      break;
    case '1,2,3':
      localGlobalData();

      GlobalGameData.playerData.forEach((player: any) => {
        if (player.name !== currentPlayerData.name) {
          handleWinData(player);

        } else {
          handleLossData(player);

        }
      });
      console.log(playerData);
      break;
    default:

      // code block
      IsLastPlayer(currentPlayerData, playersLength, playerData);
  }
}
