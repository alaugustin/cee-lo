export interface IPostGameProps {
  playerWin: {
    name: string;
    rollPoints: number;
    wins: number;
    rollPosition: number
  },
  playerLoose: {
    name: string;
    rollPoints: number;
    rollPosition: number
  }
}

export interface IGameWinnerHolderProps {
  gameWinnerHolder: HTMLElement;
}
