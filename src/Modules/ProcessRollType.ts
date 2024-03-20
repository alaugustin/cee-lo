const nextPlayer = () => {
  console.log('another player is in the game');
}

const compareScores = () => {
  console.log('last player. compare scores now');
}

const isLastPlayer = (
  currentPlayerData: any,
  playersLength: number
) => {
  if (currentPlayerData.rollPosition === playersLength) {
    compareScores();
  }else {
    nextPlayer();
  }
}

export const ProcessRollType = (
  rollType: string,
  rollPoint: number,
  rollArray_string: string,
  rollCode: number,
  rollPointHolder: HTMLElement,
  currentPlayerData: any,
  playersLength: number
) => {
  console.log('---------- ---------- ---------- ---------- ----------');
  console.log(`rollType, ${rollType}`);
  console.log(`rollPoint, ${rollPoint}`);
  console.log(`rollArray_string, ${rollArray_string}`);
  console.log(`rollCode, ${rollCode}`);
  console.log(`players in game, ${playersLength}`);


  currentPlayerData.rollCode = rollCode;
  currentPlayerData.rollPoints = rollPoint;
  console.log('currentPlayerData', currentPlayerData);
  console.log('currentPlayer roll position', currentPlayerData.rollPosition);

  rollPointHolder.innerHTML = rollPoint.toString();

  isLastPlayer(currentPlayerData, playersLength);



}
