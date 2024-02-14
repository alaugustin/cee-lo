import { PlayersRoll } from "../PlayersRoll";
import { CompareScores } from "../CompareScores";
import { ShowWinner } from "../ShowWinner";

export function RollForPosition(foo: string) {
  console.log(`${foo} RollForPosition code here`);

  PlayersRoll("testing -");
  CompareScores("testing -");
  ShowWinner("testing -");
}
