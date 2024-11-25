import { AnnouncePlayer } from '../../../Global';
import { IUpdateRollAnnouncementProps } from './UpdateRollAnnouncement.d';

export function UpdateRollAnnouncement(
  playerElement: HTMLElement,
  actionElement: HTMLElement,
  playerName: string,
  action: string
): IUpdateRollAnnouncementProps | void {
  if (playerElement.innerText !== playerName || actionElement.innerText !== action) {
    AnnouncePlayer(playerName, action);
  }
}
