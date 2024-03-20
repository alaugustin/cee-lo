import { ThreeDbuttonStyling, ThreeDbuttonStylingDisabled, ButtonEnableDisable} from './Global';

const playerArray: any[] = [];

const nextPlayer = (currentPlayerData: any) => {
  const currentPlayerButtonPosition = currentPlayerData.rollPosition -1;
  const currentPlayerButton = document.querySelectorAll('.playerColumn button')[currentPlayerButtonPosition];
  const nextPlayerButtonPosition = currentPlayerData.rollPosition;
  const nextPlayerButton = document.querySelectorAll('.playerColumn button')[nextPlayerButtonPosition];

  ButtonEnableDisable(currentPlayerButton, ThreeDbuttonStylingDisabled);
  ButtonEnableDisable(nextPlayerButton, ThreeDbuttonStyling);
}

const compareScores = (playerArray: any[]) => {
  const playerButton = document.querySelectorAll('.playerColumn button');

  playerButton.forEach((button: Element) => {
    button.setAttribute('disabled', 'disabled');
    button.className = '';
    button.classList.add(...ThreeDbuttonStylingDisabled);
  });

  console.log('last player. compare scores now');
  console.log(playerArray);
}

const isLastPlayer = (
  currentPlayerData: any,
  playersLength: number
) => {
  if (currentPlayerData.rollPosition === playersLength) {
    compareScores(playerArray);
  }else {
    nextPlayer(currentPlayerData);
  }
}

export const ProcessRollType = (
  rollType: string,
  rollPoint: number,
  rollArray_string: string, // CAN BE RMOVED
  rollCode: number,
  rollTypeHolder: HTMLElement,
  rollPointHolder: HTMLElement,
  currentPlayerData: any,
  playersLength: number
) => {
  console.log(`rollArray_string, ${rollArray_string}`);

  // ----- relevant code below -----
  currentPlayerData.rollCode = rollCode;
  currentPlayerData.rollPoints = rollPoint;

  rollTypeHolder.innerHTML = rollType;
  rollPointHolder.innerHTML = rollPoint.toString();

  isLastPlayer(currentPlayerData, playersLength);

  playerArray.push(currentPlayerData);
}
