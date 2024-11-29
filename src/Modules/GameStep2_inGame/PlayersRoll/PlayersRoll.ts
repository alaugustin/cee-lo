import {
  RollAnnouncePlayer,
  RollAnnounceAction,
  DieIcon1OutlineSvg,
  DieIcon1Svg,
  DieIcon2OutlineSvg,
  DieIcon2Svg,
  DieIcon3OutlineSvg,
  DieIcon3Svg,
  DieIcon4OutlineSvg,
  DieIcon4Svg,
  DieIcon5OutlineSvg,
  DieIcon5Svg,
  DieIcon6OutlineSvg,
  DieIcon6Svg
} from '../../Global';
import { RollHandler } from '../RollHandler/RollHandler';
import { UpdateRollAnnouncement } from './UpdateRollAnnouncement/UpdateRollAnnouncement';
import { IPlayersRollProps } from './PlayersRoll.d';

const dieIcon1Svg = DieIcon1Svg;
const dieIcon2Svg = DieIcon2Svg;
const dieIcon3Svg = DieIcon3Svg;
const dieIcon4Svg = DieIcon4Svg;
const dieIcon5Svg = DieIcon5Svg;
const dieIcon6Svg = DieIcon6Svg;
const dieIcon1OutlineSvg = DieIcon1OutlineSvg;
const dieIcon2OutlineSvg = DieIcon2OutlineSvg;
const dieIcon3OutlineSvg = DieIcon3OutlineSvg;
const dieIcon4OutlineSvg = DieIcon4OutlineSvg;
const dieIcon5OutlineSvg = DieIcon5OutlineSvg;
const dieIcon6OutlineSvg = DieIcon6OutlineSvg;

let die1Icon = null;
let die2Icon = null;
let die3Icon = null;

export function PlayersRoll({
  playersData,
  playersLength
}: IPlayersRollProps) {
  const gameBoardButtons = document.querySelectorAll('#scoreBoardHolder button') as NodeListOf<Element>;

  gameBoardButtons.forEach((button, index) => {
    const currentPlayerData = playersData[index];

    button.addEventListener('click', (event) => {
      const parentElement = (event.target as HTMLElement).closest('.playerColumn');
      const dieHolders = parentElement?.querySelectorAll('.diceHolder > div');
      const rollTypeHolder = parentElement?.querySelector('.rollTypeHolder') as HTMLElement | null;
      const rollPointHolder = parentElement?.querySelector('.rollPointHolder') as HTMLElement | null;
      const currentPlayerName = parentElement.querySelector('h4').innerText;
      const presentlyRolling = 'Rolls' as string;

      UpdateRollAnnouncement(
        RollAnnouncePlayer,
        RollAnnounceAction,
        currentPlayerName,
        presentlyRolling
      );

      const sides = 6,
        die1 = Math.floor(Math.random() * sides) + 1,
        die2 = Math.floor(Math.random() * sides) + 1,
        die3 = Math.floor(Math.random() * sides) + 1;

      // TRIPS CONDITION
      // die1 = 3,
      // die2 = 3,
      // die3 = 3;

      // 123 CONDITION
      // die1 = 1,
      // die2 = 2,
      // die3 = 3;

      // 456 CONDITION
      // die1 = 4,
      // die2 = 5,
      // die3 = 6;

      const diceArray = [die1, die2, die3];
      const rollArray = diceArray,
        rollArray_sort = rollArray.sort(),
        rollArray_string = rollArray_sort.toString();

      Array.from(dieHolders || []).forEach((holder, index) => {
        const spanElement = holder.querySelector('span') as HTMLElement | null;
        const spanElementIcon = holder.querySelector('span.icon') as HTMLElement | null;

        const getDieIcon = (value: number, isOutline: boolean = true) => {
          const iconNumber = value >= 1 && value <= 6 ? value : 1;
          const iconType = isOutline ? 'OutlineSvg' : 'Svg';
          return eval(`dieIcon${iconNumber}${iconType}`);
        };

        const populateDiceData = (element: HTMLElement, die1Data: number, die2Data: number, die3Data: number) => {
          if (element) {
            element.innerHTML = String([die1Data, die2Data, die3Data][index]);
          }
        }

        die1Icon = getDieIcon(die1, false);
        die2Icon = getDieIcon(die2, false);
        die3Icon = getDieIcon(die3);

        populateDiceData(spanElement, die1, die2, die3);
        populateDiceData(spanElementIcon, die1Icon, die2Icon, die3Icon);
      });

      // PROCESS ROLL TYPES
      if (rollTypeHolder && rollPointHolder) {
        RollHandler({
          playersData,
          playersLength,
          rollArray_string,
          rollTypeHolder,
          rollPointHolder,
          currentPlayerData,
          die1,
          die2,
          die3
        });
      }
    });
  });
}
