import { AdvanceGameRound, DisableAllButtons } from './Global';

export function CompareScores(playerDataArray: any[]) {
  const player1 = playerDataArray[0];
  const player2 = playerDataArray[1];

  DisableAllButtons();

  if (player1.rollCode > player2.rollCode) {
    console.log('player 1 wins by type');
    player1.wins += 1;
    AdvanceGameRound(player1);
  } else if (player1.rollCode < player2.rollCode) {
    console.log('player 2 wins by type');
    player2.wins += 1;
    AdvanceGameRound(player2);
  } else {
    if (player1.rollPoints > player2.rollPoints) {
      console.log('player 1 wins by points');
      player1.wins += 1;
      AdvanceGameRound(player1);
    } else if (player1.rollPoints < player2.rollPoints) {
      console.log('player 2 wins by points');
      player2.wins += 1;
      AdvanceGameRound(player2);
    } else {
      console.log('tie - roll again, stay in same round');
      console.log(playerDataArray);
    }
  }
}
