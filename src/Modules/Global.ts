import { CompareScores } from './GameStep2_inGame/CompareScores/CompareScores';
import { ShowWinner } from './ShowWinner';

export const GlobalGameData = {
  gameRound: '',
  gameRounds: '',
  playerData: [] as any[],
};

export const ThreeDbuttonStyling: string[] = ['bg-blue-500', 'hover:bg-blue-400', 'text-white', 'font-bold', 'py-2', 'px-4', 'border-b-4', 'border-blue-700', 'hover:border-blue-500', 'rounded'];

export const ThreeDbuttonStylingDisabled: string[] = ['bg-slate-500', 'text-white', 'font-bold', 'py-2', 'px-4', 'border-b-4', 'border-slate-700', 'rounded'];

export const BoldTreatment = (optClass: string | null) => {
  if (optClass === null) {
    return 'font-bold';
  } else {
    return `font-bold ${optClass}`;
  }
};

export const ButtonEnableDisable = (button: Element, buttonStyles: string[]) => {
  button.className = '';
  button.classList.add(...buttonStyles);

  if (buttonStyles === ThreeDbuttonStylingDisabled) {
    button.setAttribute('disabled', 'disabled');
  } else {
    button.removeAttribute('disabled');
  }
};

export const DisableAllButtons = () => {
  const playerButtons = document.querySelectorAll('.playerColumn button');

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
}

export const IsLastPlayer = (
  currentPlayerData: any,
  playersLength: number,
  playerDataArray: any[]
) => {
  if (currentPlayerData.rollPosition === playersLength) {
    CompareScores(playerDataArray);
  } else {
    NextPlayer(currentPlayerData);
  }
}

export const PopulateWinnerName = (winnerName: string) => {
  const winnerNameHolder = document.getElementById('winnerName');
  winnerNameHolder.innerText = winnerName;
};

export const RoundOrGame = (playType: string) => {
  const roundOrGameStrHolder = document.getElementById('roundOrGame');

  roundOrGameStrHolder.innerText = playType;
}

export const AdvanceGameRound = (winningPlayer: { name: string }) => {
  const { gameRounds } = GlobalGameData;

  GlobalGameData.gameRound += 1;
  PopulateWinnerName(winningPlayer.name);

  if (GlobalGameData.gameRound === gameRounds) {
    console.log('last round. show winner');
    console.log('Player data is: ', GlobalGameData.playerData);
    console.log(`Game round: ${GlobalGameData.gameRound} of ${GlobalGameData.gameRounds}`);

    RoundOrGame('game');
    ShowWinner('testing -');
  } else {
    console.log('go to next round');
    console.log('Player data is: ', GlobalGameData.playerData);
    console.log(`Going into game round: ${GlobalGameData.gameRound} of ${GlobalGameData.gameRounds}`);

    RoundOrGame('round');
  }
}

// TODO: REMOVE ANYTHING THAT  IS NOT BEING USED ABOVE
export const ToggleGameScreen = (screenName: string, shouldHide: boolean) => {
  document.getElementById(screenName)?.classList[shouldHide ? 'add' : 'remove']('hidden');
}

export const AutoRollPlayer = (player: string) => {
  const button = document.querySelector(`${player} button`);
  button.classList.add(...ThreeDbuttonStylingDisabled);

  setInterval(function () {
    if (button instanceof HTMLElement) {
      button.click();
    }
  }, 750);
}

export const UpdatePlayerHolder = (playerHolder: HTMLElement, playerData: { name: string; rollPoints: number }) => {
  playerHolder.innerText = `${playerData.name} rolled a ${playerData.rollPoints}`;
};
