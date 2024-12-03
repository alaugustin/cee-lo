import { CompareScores } from './GameStep2_inGame/CompareScores/CompareScores';
import {
  PlayerButtons,
  NewGameButton,
  AnnouncePlayerNameHolder,
  AnnouncePlayerActionHolder,
  GameWinnerHolder,
  GameLossHolder
} from './GlobalHTMLElements';
import {
  PopulateWinnerName,
  RoundOrGame,
  ToggleGameScreen
} from './GlobalHelperFunc';
import {
  IButtonEnableDisableProps,
  IIsLastPlayer,
  IAnnouncePlayer,
  IPlayerDataProps,
  IUpdatePlayerHolderProps,
  IPlayerResultHandler
} from './Global.d';

export const ThreeDbuttonStyling: string[] = ['bg-blue-500', 'hover:bg-blue-400', 'text-white', 'font-bold', 'py-2', 'px-4', 'border-b-4', 'border-blue-700', 'hover:border-blue-500', 'rounded'];

export const ThreeDbuttonStylingDisabled: string[] = ['bg-slate-500', 'text-white', 'font-bold', 'py-2', 'px-4', 'border-b-4', 'border-slate-700', 'rounded'];

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
  PlayerButtons.forEach((button: Element) => {
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
  const nextPlayerButtonPosition = currentPlayerData.rollPosition;
  const nextPlayerButton = document.querySelectorAll('.playerColumn button')[nextPlayerButtonPosition];

  if (currentPlayerData.rollPosition === playersLength) {
    CompareScores(playerDataArray);
  } else {
    NextPlayer(currentPlayerData);

    playerDataArray.forEach((player) => {
      if (player.name !== currentPlayerData.name && player.rollPoints === 0 && player.rollType === '') {
        if (currentPlayerData.rollType === '4,5,6' || currentPlayerData.rollType === '1,2,3') {
          if (currentPlayerData.rollType === '1,2,3') {
            player.rollPoints = 1;
          }
          ButtonEnableDisable(nextPlayerButton, ThreeDbuttonStylingDisabled);
          CompareScores(playerDataArray);
        }
      }
    });
  }
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
  NewGameButton.addEventListener('click', () => {
    window.location.reload();
  });
};

export const AnnouncePlayer: IAnnouncePlayer = (
  playerName,
  playerAction
) => {
  AnnouncePlayerNameHolder.innerText = playerName;
  AnnouncePlayerActionHolder.innerText = playerAction;
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
  const payOnWayOutString = 'Pay on your way out';

  if (playerData.rollCode === null) {
    playerHolder.innerText = '';
  } else if (playerData.rollCode === 3) {
    playerHolder.innerText = playerData.name === 'The House'
      ? `${roll456string}. ${payOnWayOutString}!`
      : `${roll456string}. ${bankBrokenString}!`;
  } else if (playerData.rollCode === 2) {
    playerHolder.innerText = `${playerData.name} rolled trips ${playerData.rollPoints}`;
  } else if (playerData.rollCode === 0) {
    playerHolder.innerText = playerData.name === 'The House'
      ? `${roll123string}. ${bankBrokenString}!`
      : `${roll123string}. Better luck next time. ${payOnWayOutString}!`;
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
    UpdatePlayerHolder(GameWinnerHolder, playerData);
    RoundOrGame('round'); // todo: develop condition for round or game in ProcessRollType.ts
    ToggleGameScreen('endScreen', false);
  } else {
    handleLossData(playerData);
    UpdatePlayerHolder(GameLossHolder, playerData);
  }
}
