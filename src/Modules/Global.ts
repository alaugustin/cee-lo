import { CompareScores } from './CompareScores';
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

export const AdvanceGameRound = (winningPlayer: any) => {
  const winnerHolder = document.getElementById('winnerHolder');
  const winnerNameHolder = document.getElementById('winnerName');
  const roundOrGameStrHolder = document.getElementById('roundOrGame');
  const { gameRounds } = GlobalGameData;

  GlobalGameData.gameRound += 1;

  const roundOrGame = (playType: string) => {
    winnerNameHolder.innerText = winningPlayer.name;
    roundOrGameStrHolder.innerText = playType;
    winnerHolder.classList.remove('hidden');
  }

  if (GlobalGameData.gameRound === gameRounds) {
    console.log('last round. show winner');
    console.log(GlobalGameData.playerData);

    roundOrGame('game');
    ShowWinner('testing -');
  } else {
    console.log('next round');
    console.log(GlobalGameData.playerData);

    roundOrGame('round');
  }
}
