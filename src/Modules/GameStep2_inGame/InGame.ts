// import { TheRollHandler } from './RollHandler/RollHandler';
// import { PostGame } from '../GameStep3_postGame/PostGame';
import { GameBoard } from './GameBoard/GameBoard';
import { ToggleGameScreen } from '../Global';

export function InGame(playerArray:string[]) {
  ToggleGameScreen('gameboard', false); // show game board

  GameBoard(playerArray);
}
