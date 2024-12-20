import { NewGameButtonEventHandler } from '../../../Global';
import {
  ComputerNameHolder,
  PlayerNameHolder
} from '../../../GlobalHTMLElements';
import { ICompareScoresProps } from '../CompareScores.d';

const tieNameConstructor = (
  holderName: HTMLElement,
  player: ICompareScoresProps
) => {
  holderName.innerText = player.name
}

export function HandleTieEvent(params: ICompareScoresProps) {

  params.tie += 1;

  (params.name === 'The House') ?
    tieNameConstructor(ComputerNameHolder, params) :
    tieNameConstructor(PlayerNameHolder, params);

  NewGameButtonEventHandler();
}
