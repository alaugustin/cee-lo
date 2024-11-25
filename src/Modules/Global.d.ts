export interface IButtonEnableDisableProps {
  (
    button: Element,
    buttonStyles: string[]
  ): void
}

export interface IIsLastPlayer {
  (
    currentPlayerData: any,
    playersLength: number,
    playerDataArray: any[]
  ): void
}

export interface IToggleGameScreen {
  (
    screenName: string,
    shouldHide: boolean
  ): void
}

export interface IAnnouncePlayer {
  (
    playerName: string,
    playerAction: string
  ): void
}

export interface IPlayerDataProps {
  name: string;
  win: number;
  loss: number;
  rollPosition: number;
  wltBoard: HTMLElement;
  rollPoints: number;
  rollCode: number;
}
