import { CompareScores } from './GameStep2_inGame/CompareScores/CompareScores';
import {
  IButtonEnableDisableProps,
  IIsLastPlayer,
  IToggleGameScreen,
  IAnnouncePlayer,
  IPlayerDataProps,
  IUpdatePlayerHolderProps,
  IPlayerResultHandler
} from './Global.d'

export const GameWinnerHolder = document.getElementById('gameWinnerHolder') as HTMLElement;
export const GameLossHolder = document.getElementById('gameLossHolder') as HTMLElement;
export const ComputerNameHolder = document.getElementById('computerName') as HTMLElement | null;
export const PlayerNameHolder = document.getElementById('playerName') as HTMLElement | null;
export const RollAnnouncePlayer = document.getElementById('currentPlayerName') as HTMLElement | null;
export const RollAnnounceAction = document.getElementById('currentPlayerAction') as HTMLElement | null;
export const ScoreBoardHolder = document.getElementById('scoreBoardHolder') as HTMLElement | null;

const playerButtons = document.querySelectorAll('.playerColumn button');
const winnerNameHolder = document.getElementById('winnerName');
const roundOrGameStrHolder = document.getElementById('roundOrGame');
const newGameButton = document.getElementById('newGameButton') as HTMLElement;
const announcePlayerNameHolder = document.getElementById('currentPlayerName') as HTMLElement;
const announcePlayerActionHolder = document.getElementById('currentPlayerAction') as HTMLElement;
const gameWinnerHolder = document.getElementById('gameWinnerHolder');
const gameLossHolder = document.getElementById('gameLossHolder');

export const ThreeDbuttonStyling: string[] = ['bg-blue-500', 'hover:bg-blue-400', 'text-white', 'font-bold', 'py-2', 'px-4', 'border-b-4', 'border-blue-700', 'hover:border-blue-500', 'rounded'];

export const ThreeDbuttonStylingDisabled: string[] = ['bg-slate-500', 'text-white', 'font-bold', 'py-2', 'px-4', 'border-b-4', 'border-slate-700', 'rounded'];

const svgWidth = 'w-8';
export const DieIcon1Svg = `<svg class="${svgWidth}" xmlns="http://www.w3.org/2000/svg" id="mdi-dice-1" viewBox="0 0 24 24"><path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" /></svg>`;
export const DieIcon2Svg = `<svg class="${svgWidth}"  xmlns="http://www.w3.org/2000/svg" id="mdi-dice-2" viewBox="0 0 24 24"><path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15Z" /></svg>`;
export const DieIcon3Svg = `<svg class="${svgWidth}"  xmlns="http://www.w3.org/2000/svg" id="mdi-dice-3" viewBox="0 0 24 24"><path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15Z" /></svg>`;
export const DieIcon4Svg = `<svg class="${svgWidth}"  xmlns="http://www.w3.org/2000/svg" id="mdi-dice-4" viewBox="0 0 24 24"><path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15M17,5A2,2 0 0,0 15,7A2,2 0 0,0 17,9A2,2 0 0,0 19,7A2,2 0 0,0 17,5M7,15A2,2 0 0,0 5,17A2,2 0 0,0 7,19A2,2 0 0,0 9,17A2,2 0 0,0 7,15Z" /></svg>`;
export const DieIcon5Svg = `<svg class="${svgWidth}"  xmlns="http://www.w3.org/2000/svg" id="mdi-dice-5" viewBox="0 0 24 24"><path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15M17,5A2,2 0 0,0 15,7A2,2 0 0,0 17,9A2,2 0 0,0 19,7A2,2 0 0,0 17,5M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M7,15A2,2 0 0,0 5,17A2,2 0 0,0 7,19A2,2 0 0,0 9,17A2,2 0 0,0 7,15Z" /></svg>`;
export const DieIcon6Svg = `<svg class="${svgWidth}"  xmlns="http://www.w3.org/2000/svg" id="mdi-dice-6" viewBox="0 0 24 24"><path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15M17,10A2,2 0 0,0 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10M17,5A2,2 0 0,0 15,7A2,2 0 0,0 17,9A2,2 0 0,0 19,7A2,2 0 0,0 17,5M7,10A2,2 0 0,0 5,12A2,2 0 0,0 7,14A2,2 0 0,0 9,12A2,2 0 0,0 7,10M7,15A2,2 0 0,0 5,17A2,2 0 0,0 7,19A2,2 0 0,0 9,17A2,2 0 0,0 7,15Z" /></svg>`;
export const DieIcon1OutlineSvg = `<svg class="${svgWidth}"  xmlns="http://www.w3.org/2000/svg" id="mdi-dice-1-outline" viewBox="0 0 24 24"><path d="M19 5V19H5V5H19M19 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M12 10.5C11.17 10.5 10.5 11.17 10.5 12S11.17 13.5 12 13.5 13.5 12.83 13.5 12 12.83 10.5 12 10.5" /></svg>`;
export const DieIcon2OutlineSvg = `<svg class="${svgWidth}"  xmlns="http://www.w3.org/2000/svg" id="mdi-dice-2-outline" viewBox="0 0 24 24"><path d="M19 5V19H5V5H19M19 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M7.5 6C6.67 6 6 6.67 6 7.5S6.67 9 7.5 9 9 8.33 9 7.5 8.33 6 7.5 6M16.5 15C15.67 15 15 15.67 15 16.5C15 17.33 15.67 18 16.5 18C17.33 18 18 17.33 18 16.5C18 15.67 17.33 15 16.5 15Z" /></svg>`;
export const DieIcon3OutlineSvg = `<svg class="${svgWidth}"  xmlns="http://www.w3.org/2000/svg" id="mdi-dice-3-outline" viewBox="0 0 24 24"><path d="M19 5V19H5V5H19M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M12 10.5C11.2 10.5 10.5 11.2 10.5 12S11.2 13.5 12 13.5 13.5 12.8 13.5 12 12.8 10.5 12 10.5M7.5 6C6.7 6 6 6.7 6 7.5S6.7 9 7.5 9 9 8.3 9 7.5 8.3 6 7.5 6M16.5 15C15.7 15 15 15.7 15 16.5C15 17.3 15.7 18 16.5 18C17.3 18 18 17.3 18 16.5C18 15.7 17.3 15 16.5 15Z" /></svg>`;
export const DieIcon4OutlineSvg = `<svg class="${svgWidth}"  xmlns="http://www.w3.org/2000/svg" id="mdi-dice-4-outline" viewBox="0 0 24 24"><path d="M19 5V19H5V5H19M19 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M7.5 6C6.67 6 6 6.67 6 7.5S6.67 9 7.5 9 9 8.33 9 7.5 8.33 6 7.5 6M16.5 15C15.67 15 15 15.67 15 16.5C15 17.33 15.67 18 16.5 18C17.33 18 18 17.33 18 16.5C18 15.67 17.33 15 16.5 15M16.5 6C15.67 6 15 6.67 15 7.5S15.67 9 16.5 9C17.33 9 18 8.33 18 7.5S17.33 6 16.5 6M7.5 15C6.67 15 6 15.67 6 16.5C6 17.33 6.67 18 7.5 18S9 17.33 9 16.5C9 15.67 8.33 15 7.5 15Z" /></svg>`;
export const DieIcon5OutlineSvg = `<svg class="${svgWidth}"  xmlns="http://www.w3.org/2000/svg" id="mdi-dice-5-outline" viewBox="0 0 24 24"><path d="M19 5V19H5V5H19M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7.5 6C6.7 6 6 6.7 6 7.5S6.7 9 7.5 9 9 8.3 9 7.5 8.3 6 7.5 6M16.5 15C15.7 15 15 15.7 15 16.5C15 17.3 15.7 18 16.5 18C17.3 18 18 17.3 18 16.5C18 15.7 17.3 15 16.5 15M16.5 6C15.7 6 15 6.7 15 7.5S15.7 9 16.5 9C17.3 9 18 8.3 18 7.5S17.3 6 16.5 6M12 10.5C11.2 10.5 10.5 11.2 10.5 12S11.2 13.5 12 13.5 13.5 12.8 13.5 12 12.8 10.5 12 10.5M7.5 15C6.7 15 6 15.7 6 16.5C6 17.3 6.7 18 7.5 18S9 17.3 9 16.5C9 15.7 8.3 15 7.5 15Z" /></svg>`;
export const DieIcon6OutlineSvg = `<svg class="${svgWidth}"  xmlns="http://www.w3.org/2000/svg" id="mdi-dice-6-outline" viewBox="0 0 24 24"><path d="M19 5V19H5V5H19M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7.5 6C6.7 6 6 6.7 6 7.5S6.7 9 7.5 9 9 8.3 9 7.5 8.3 6 7.5 6M16.5 15C15.7 15 15 15.7 15 16.5C15 17.3 15.7 18 16.5 18C17.3 18 18 17.3 18 16.5C18 15.7 17.3 15 16.5 15M16.5 10.5C15.7 10.5 15 11.2 15 12S15.7 13.5 16.5 13.5C17.3 13.5 18 12.8 18 12S17.3 10.5 16.5 10.5M16.5 6C15.7 6 15 6.7 15 7.5S15.7 9 16.5 9C17.3 9 18 8.3 18 7.5S17.3 6 16.5 6M7.5 10.5C6.7 10.5 6 11.2 6 12S6.7 13.5 7.5 13.5 9 12.8 9 12 8.3 10.5 7.5 10.5M7.5 15C6.7 15 6 15.7 6 16.5C6 17.3 6.7 18 7.5 18S9 17.3 9 16.5C9 15.7 8.3 15 7.5 15Z" /></svg>`;

export const BoldTreatment = (optClass: string | null) => {
  if (optClass === null) {
    return 'font-bold';
  } else {
    return `font-bold ${optClass}`;
  }
};

export const GlobalGameData = {
  gameRound: '',
  gameRounds: '',
  playerData: [] as any[],
};

export const ButtonEnableDisable: IButtonEnableDisableProps = (
  button,
  buttonStyles
) => {
  button.className = '';
  button.classList.add(...buttonStyles);

  if (buttonStyles === ThreeDbuttonStylingDisabled) {
    button.setAttribute('disabled', 'disabled');
  } else {
    button.removeAttribute('disabled');
  }
};

export const DisableAllButtons = () => {
  playerButtons.forEach((button: Element) => {
    button.setAttribute('disabled', 'disabled');
    button.className = '';
    button.classList.add(...ThreeDbuttonStylingDisabled);
  });
};

const NextPlayer = (currentPlayerData: any) => {
  const currentPlayerButtonPosition = currentPlayerData.rollPosition - 1;
  const currentPlayerButton = document.querySelectorAll('.playerColumn button')[currentPlayerButtonPosition];
  const nextPlayerButtonPosition = currentPlayerData.rollPosition;
  const nextPlayerButton = document.querySelectorAll('.playerColumn button')[nextPlayerButtonPosition];

  ButtonEnableDisable(currentPlayerButton, ThreeDbuttonStylingDisabled);
  ButtonEnableDisable(nextPlayerButton, ThreeDbuttonStyling);
};

export const IsLastPlayer: IIsLastPlayer = (
  currentPlayerData,
  playersLength,
  playerDataArray
) => {
  if (currentPlayerData.rollPosition === playersLength) {
    CompareScores(playerDataArray);
  } else {
    NextPlayer(currentPlayerData);
  }
};

export const PopulateWinnerName = (winnerName: string) => {
  winnerNameHolder.innerText = winnerName;
};

export const RoundOrGame = (playType: string) => {
  roundOrGameStrHolder.innerText = playType;
};

export const AdvanceGameRound = (winningPlayer: { name: string }) => {
  const { gameRounds } = GlobalGameData;

  GlobalGameData.gameRound += 1;
  PopulateWinnerName(winningPlayer.name);

  if (GlobalGameData.gameRound === gameRounds) {
    RoundOrGame('game');
  } else {
    RoundOrGame('round');
  }
};

export const ToggleGameScreen: IToggleGameScreen = (
  screenName,
  shouldHide
) => {
  document.getElementById(screenName)?.classList[
    shouldHide ? 'add' : 'remove'
  ]('hidden');
};

export const AutoRollPlayer = (player: string) => {
  const button = document.querySelector(`${player} button`);
  button.classList.add(...ThreeDbuttonStylingDisabled);

  setInterval(function () {
    if (button instanceof HTMLElement) {
      button.click();
    }
  }, 750);
};

export const NewGameButtonEventHandler = () => {
  newGameButton.addEventListener('click', () => {
    window.location.reload();
  });
};

export const AnnouncePlayer: IAnnouncePlayer = (
  playerName,
  playerAction
) => {
  announcePlayerNameHolder.innerText = playerName;
  announcePlayerActionHolder.innerText = playerAction;
}

export const ClearGameValues = (selectors: string[]) => {
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      element.innerHTML = selector.includes('diceHolder') ? '-' : '';
    });
  });
};

export const UpdatePlayerHolder: IUpdatePlayerHolderProps = (
  playerHolder: HTMLElement,
  playerData: {
    name: string;
    rollPoints: number;
    rollCode: number;
  }
) => {
  const roll456string = `${playerData.name} rolled 456`;
  const roll123string = `${playerData.name} rolled 123`;
  const bankBrokenString = 'You beat the bank';

  if (playerData.rollCode === null) {
    playerHolder.innerText = '';
  } else if (playerData.rollCode === 3) {
    playerHolder.innerText = playerData.name === 'The House'
      ? `${roll456string}. Pay on your way out!`
      : `${roll456string}. ${bankBrokenString}!`;
  } else if (playerData.rollCode === 2) {
    playerHolder.innerText = `${playerData.name} rolled trips ${playerData.rollPoints}`;
  } else if (playerData.rollCode === 0) {
    playerHolder.innerText = playerData.name === 'The House'
      ? `${roll123string}. ${bankBrokenString}!`
      : `${roll123string}. Better luck next time!`;
  } else {
    playerHolder.innerText = `${playerData.name} rolled ${playerData.rollPoints}`;
  }

  NewGameButtonEventHandler();
};

export const HandlePlayerResult: IPlayerResultHandler = (
  playerData,
  isWin
) => {
  const handleLossData = (playerData: IPlayerDataProps) => {
    playerData.loss += 1;
    playerData.rollPosition = 2;
  };

  const handleWinData = (playerData: IPlayerDataProps) => {
    PopulateWinnerName(playerData.name);

    playerData.win += 1;
    playerData.rollPosition = 1;
  };

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
}
