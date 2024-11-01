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
