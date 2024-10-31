import { RollHandler } from '../../RollHandler/RollHandler';
import { IPlayersRollProps } from './PlayersRoll.d';

export function PlayerRoll({ playersData, playersLength }: IPlayersRollProps) {
  const gameBoardButtons: NodeListOf<Element> = document.querySelectorAll('#scoreBoardHolder button');

  gameBoardButtons.forEach((button: HTMLElement, index: number) => {
    const currentPlayerData = playersData[index];

    button.addEventListener('click', (event: MouseEvent) => {
      const parentElement = (event.target as HTMLElement).closest('.playerColumn');
      const dieHolders = parentElement?.querySelectorAll('.diceHolder > div');
      const rollTypeHolder = parentElement?.querySelector('.rollTypeHolder');
      const rollPointHolder = parentElement?.querySelector('.rollPointHolder');

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

        if (spanElement) {
          spanElement.innerHTML = String([die1, die2, die3][index]);
        }
      });

      // PROCESS ROLL TYPES
      if (rollTypeHolder && rollPointHolder) {
        RollHandler(playersData, playersLength, rollArray_string, rollTypeHolder as HTMLElement, rollPointHolder as HTMLElement, currentPlayerData, die1, die2, die3);
      }
    });  });}
