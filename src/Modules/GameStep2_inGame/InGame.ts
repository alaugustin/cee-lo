import { GameBoard } from './GameBoard/GameBoard';
import { ToggleGameScreen } from '../Global';

export function InGame(playerArray:string[]) {
  ToggleGameScreen('gameboard', false); // show game board

  GameBoard(playerArray);
}
