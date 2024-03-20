import { ThreeDbuttonStyling, ThreeDbuttonStylingDisabled, ButtonEnableDisable } from './Global';

const nextPlayer = (currentPlayerData: any) => {
  const currentPlayerButtonPosition = currentPlayerData.rollPosition -1;
  const currentPlayerButton = document.querySelectorAll('.playerColumn button')[currentPlayerButtonPosition];
  const nextPlayerButtonPosition = currentPlayerData.rollPosition;
  const nextPlayerButton = document.querySelectorAll('.playerColumn button')[nextPlayerButtonPosition];

  ButtonEnableDisable(currentPlayerButton, ThreeDbuttonStylingDisabled);
  ButtonEnableDisable(nextPlayerButton, ThreeDbuttonStyling);
}

const compareScores = () => {
  console.log('last player. compare scores now');

  document.querySelectorAll('.playerColumn button').forEach((button: Element) => {
    button.setAttribute('disabled', 'disabled');
    button.className = '';
    button.classList.add(...ThreeDbuttonStylingDisabled);
  });
}

const isLastPlayer = (
  currentPlayerData: any,
  playersLength: number
) => {
  if (currentPlayerData.rollPosition === playersLength) {
    compareScores();
  }else {
    nextPlayer(currentPlayerData);
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
  console.log(`rollArray_string, ${rollArray_string}`);

  // ----- relevant code below -----
  currentPlayerData.rollCode = rollCode;
  currentPlayerData.rollPoints = rollPoint;

  rollPointHolder.innerHTML = rollPoint.toString();

  isLastPlayer(currentPlayerData, playersLength);
}
