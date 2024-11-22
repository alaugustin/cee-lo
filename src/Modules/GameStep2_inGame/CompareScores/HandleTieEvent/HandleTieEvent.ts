
import { ICompareScoresProps } from '../CompareScores.d';
import { WLTBoardSetZeros, NewGameButtonEventHandler, PlayAgainButtonEventHandler } from '../../../Global';

const computerNameHolder = document.getElementById('computerName') as HTMLElement | null;
const playerNameHolder = document.getElementById('playerName') as HTMLElement | null;

const tieNameConstructor = (
  holderName: HTMLElement,
  player: ICompareScoresProps
) => {
  holderName.innerText = player.name
}

export function HandleTieEvent(params: ICompareScoresProps) {
  const tieElement = params.wltBoard.querySelector('.tie');

  NewGameButtonEventHandler();
  PlayAgainButtonEventHandler();

  params.tie += 1;

  if (tieElement instanceof HTMLElement) {
    WLTBoardSetZeros(params);
    tieElement.innerText = params.tie.toString();
  }

  (params.name === 'The House') ?
    tieNameConstructor(computerNameHolder, params) :
    tieNameConstructor(playerNameHolder, params);
}
