export interface IProcessRollTypeProps {
  rollType: string,
  playerData: Array<Record<string, unknown>>,
  rollPoint: number,
  rollCode: number,
  rollTypeHolder: HTMLElement,
  rollPointHolder: HTMLElement,
  currentPlayerData: Record<string, unknown>,
  playersLength: number
}

export interface IPlayerWinDataProps {
  name: string;
  win: number;
  rollPosition: number;
}

export interface IPlayerLossDataProps {
  loss: number;
  rollPosition: number;
}

export interface IPlayerResultData {
  name: string;
  win: number;
  loss: number;
  tie: number;
  rollPosition: number;
  rollPoints: number;
  rollCode: number;
}
