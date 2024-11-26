export interface IPlayerDataProps {
  name: string;
  win: number;
  loss: number;
  rollPosition: number;
  wltBoard: HTMLElement;
  rollPoints: number;
  rollCode: number;
}

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

export interface IUpdatePlayerHolderProps {
  (
    playerHolder: HTMLElement,
    playerData: {
      name: string;
      rollPoints: number;
      rollCode: number;
    }
  ): void
}

export interface IWLTBoardSetZerosProps {
  wltBoard: HTMLElement;
}

export interface IPlayerResultHandler {
  (
    playerData: IPlayerDataProps,
    isWin: boolean
  ): void
}
