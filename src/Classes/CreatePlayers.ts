class CreatePlayer {
  name: string;
}

export class PlayerObj extends CreatePlayer {
  rollPosition: number;
  rollType: string;
  rollPoints: number;
  rollCode: number;
  win: number;
  loss: number
  tie: number;
}
