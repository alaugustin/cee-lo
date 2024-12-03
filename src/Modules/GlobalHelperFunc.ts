import {
  WinnerNameHolder,
  RoundOrGameStrHolder
} from "./GlobalHTMLElements";
import { IToggleGameScreen } from "./Global.d";

export const BoldTreatment = (optClass: string | null) => {
  if (optClass === null) {
    return 'font-bold';
  } else {
    return `font-bold ${optClass}`;
  }
};

export const HeaderTextSize = (fontSize: number | null) => {
  if (fontSize === null) {
    return 'text-xl';
  } else {
    return `text-${fontSize}xl`;
  }
};

export const PopulateWinnerName = (winnerName: string) => {
  WinnerNameHolder.innerText = winnerName;
};

export const RoundOrGame = (playType: string) => {
  RoundOrGameStrHolder.innerText = playType;
};

export const ToggleGameScreen: IToggleGameScreen = (
  screenName,
  shouldHide
) => {
  document.getElementById(screenName)?.classList[
    shouldHide ? 'add' : 'remove'
  ]('hidden');
};
