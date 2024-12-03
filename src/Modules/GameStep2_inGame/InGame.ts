import { ToggleGameScreen } from '../GlobalHelperFunc';
import { GameBoard } from './GameBoard/GameBoard';
import { IInGameProps } from './InGame.d';

export function InGame(playerArrayProps: IInGameProps) {
  ToggleGameScreen('gameboard', false); // show game board

  GameBoard(playerArrayProps.playerArray);
}
