import { IUpdateRollAnnouncementProps } from './UpdateRollAnnouncement.d';
export function UpdateRollAnnouncement(
  playerElement: HTMLElement,
  actionElement: HTMLElement,
  playerName: string,
  action: string
): IUpdateRollAnnouncementProps | void {
  if (playerElement.innerText !== playerName) {
    playerElement.innerText = playerName;
  }

  if (actionElement.innerText !== action) {
    actionElement.innerText = action;
  }
};
