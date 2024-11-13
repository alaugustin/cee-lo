import { GameBoard } from './GameBoard/GameBoard';
import { ToggleGameScreen } from '../Global';
import { IInGameProps } from './InGame.d';

export function InGame(playerArrayProps: IInGameProps) {
  ToggleGameScreen('gameboard', false); // show game board

  GameBoard(playerArrayProps.playerArray);
}
