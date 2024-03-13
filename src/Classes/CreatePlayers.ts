class CreatePlayer {
  name: string;
}

export class PlayerObj extends CreatePlayer {
  rollPosition: number;
  rollPoints: number;
  rollCode: number;
  wins: number;
  losses: number
}
