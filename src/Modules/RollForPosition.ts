import { PlayersRoll } from "./PlayersRoll";
import { CompareScores } from "./CompareScores";
import { ShowWinner } from "./ShowWinner";

export function RollForPosition(player1Name: string, player2Name: string) {
  console.log(`${player1Name} rollForPosition`);
  console.log(`${player2Name} rollForPosition`);

  PlayersRoll("testing -");
  CompareScores("testing -");
  ShowWinner("testing -");
}
