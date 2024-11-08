export interface IRollHandlerProps {
  playersData: Array<Record<string, unknown>>,
  playersLength: number,
  rollArray_string: string,
  rollTypeHolder: HTMLElement,
  rollPointHolder: HTMLElement,
  currentPlayerData: Record<string, unknown>,
  die1: number,
  die2: number,
  die3: number
 }
