import { CompareScores } from './GameStep2_inGame/CompareScores/CompareScores';
import {
  IButtonEnableDisableProps,
  IIsLastPlayer,
  IToggleGameScreen,
  IAnnouncePlayer,
  IPlayerDataProps
} from './Global.d'

const playerButtons = document.querySelectorAll('.playerColumn button');
const winnerNameHolder = document.getElementById('winnerName');
const roundOrGameStrHolder = document.getElementById('roundOrGame');
const newGameButton = document.getElementById('newGameButton') as HTMLElement;
const playAgainButton = document.getElementById('playAgainButton') as HTMLElement;
const announcePlayerNameHolder = document.getElementById('currentPlayerName') as HTMLElement;
const announcePlayerActionHolder = document.getElementById('currentPlayerAction') as HTMLElement;
const gameWinnerHolder = document.getElementById('gameWinnerHolder');
const gameLossHolder = document.getElementById('gameLossHolder');
const rollTypeHolders = '.rollTypeHolder';
const rollPointHolders = '.rollPointHolder';
const diceHolders = '.diceHolder > div > span';

export const ThreeDbuttonStyling: string[] = ['bg-blue-500', 'hover:bg-blue-400', 'text-white', 'font-bold', 'py-2', 'px-4', 'border-b-4', 'border-blue-700', 'hover:border-blue-500', 'rounded'];

export const ThreeDbuttonStylingDisabled: string[] = ['bg-slate-500', 'text-white', 'font-bold', 'py-2', 'px-4', 'border-b-4', 'border-slate-700', 'rounded'];

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
  document.getElementById(screenName)?.classList[shouldHide ? 'add' : 'remove']('hidden');
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

export const PlayAgainButtonEventHandler = () => {
  playAgainButton.addEventListener('click', () => {
    ToggleGameScreen('gameboard', false);

    AnnouncePlayer('Please', 'Roll');

    ClearGameValues([
      rollTypeHolders,
      rollPointHolders,
      diceHolders
    ]);

    console.log('update gameboard WLT table for points');
    console.log('no issue with trips');
    console.log('456 and 123 infinite loop');
    console.log('autoroll computer player and start game flow');
    // ToggleGameScreen('endScreen', true);
  });
};

export const UpdatePlayerHolder = (
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

  NewGameButtonEventHandler();
  PlayAgainButtonEventHandler();

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
};

interface IWLTBoardSetZerosProps {
  wltBoard: HTMLElement;
}

export const WLTBoardSetZeros = (parentName: IWLTBoardSetZerosProps) => {
  const wltDataCols = parentName.wltBoard.querySelectorAll('td');

  wltDataCols.forEach((element: Element) => {
    element.innerHTML = '0';
  });
};

interface IPopulateWLTBoardProps {
  wltBoard: HTMLElement;
  win: number;
  loss: number;
}

export const PopulateWLTBoard = (
  playerData: IPopulateWLTBoardProps,
  isWin: boolean
) => {
  WLTBoardSetZeros(playerData);

  isWin ?
    playerData.wltBoard.querySelector('.win').innerHTML = playerData.win.toString() :
    playerData.wltBoard.querySelector('.loss').innerHTML = playerData.loss.toString();
};

export const HandlePlayerResult = (
  playerData: IPlayerDataProps,
  isWin: boolean
) => {
  const handleLossData = (playerData: IPlayerDataProps) => {
    playerData.loss += 1;
    playerData.rollPosition = 2;

    PopulateWLTBoard(playerData, false);
  };

  const handleWinData = (playerData: IPlayerDataProps) => {
    PopulateWinnerName(playerData.name);

    playerData.win += 1;
    playerData.rollPosition = 1;

    PopulateWLTBoard(playerData, true);
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
