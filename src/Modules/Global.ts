import { CompareScores } from './CompareScores/CompareScores';
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

export const HideShowWinnerHolder = (winnerName: string) => {
  const winnerNameHolder = document.getElementById('winnerName');
  const winnerHolder = document.getElementById('winnerHolder');

  winnerNameHolder.innerText = winnerName;
  winnerHolder.classList.remove('hidden');
};

export const RoundOrGame = (playType: string) => {
  const roundOrGameStrHolder = document.getElementById('roundOrGame');

  roundOrGameStrHolder.innerText = playType;
}

export const AdvanceGameRound = (winningPlayer: any) => {
  const { gameRounds } = GlobalGameData;

  GlobalGameData.gameRound += 1;
  HideShowWinnerHolder(winningPlayer.name);

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
export const HideGameScreen = (screenName: string) => {
  document.getElementById(screenName).classList.add('hidden')
}
export const ShowGameScreen = (screenName: string) => {
  document.getElementById(screenName).classList.remove('hidden')
}

export const ToggleGameScreen = (screenName: string, shouldHide: boolean) => {
  document.getElementById(screenName)?.classList[shouldHide ? 'add' : 'remove']('hidden');
}
