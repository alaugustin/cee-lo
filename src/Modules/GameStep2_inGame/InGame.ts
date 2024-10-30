import { TheRollHandler } from './RollHandler/RollHandler';
import { PostGame } from '../GameStep3_postGame/PostGame';

export function InGame(playerArray: string[]) {
  // ShowGameScreen('gameboard');

  console.log(playerArray);

  console.log(`
    • compare player 1 and player 2 matrix
      • 456: player immediately wins
      • trips: compare player 1 point and player 2 point
      • points: compare player 1 point and player 2 point
      • 123: player instant loss
  `);

  TheRollHandler(1, true);

  TheRollHandler(2, false);

  // HideGameScreen('gameboard');

  PostGame();
}
