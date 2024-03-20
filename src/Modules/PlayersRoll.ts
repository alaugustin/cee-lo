import { RollHandler } from './RollHandler';

export function PlayerRoll(playersData: any[], playersLength: number) {
  const gameBoardButtons: NodeListOf<Element> = document.querySelectorAll('#scoreBoardHolder button');

  gameBoardButtons.forEach((button: HTMLElement, index: number) => {
    const currentPlayerData = playersData[index];

    button.addEventListener('click', (event: Event | any) => {
      const sides = 6,
        die1 = Math.floor(Math.random() * sides) + 1,
        die2 = Math.floor(Math.random() * sides) + 1,
        die3 = Math.floor(Math.random() * sides) + 1;

      const parentElement = event.target.closest('.playerColumn');
      const dieHolders = parentElement.querySelectorAll('.diceHolder > div');const rollTypeHolder = parentElement.querySelector('.rollTypeHolder');
      const rollPointHolder = parentElement.querySelector('.rollPointHolder');
      const diceArray = [die1, die2, die3];
      const rollArray = diceArray,
        rollArray_sort = rollArray.sort(),
        rollArray_string = rollArray_sort.toString();

      Array.from(dieHolders).forEach((holder: any, index) => {
        const spanElement = holder.querySelector('span') as HTMLElement | null;

        if (spanElement) {
          spanElement.innerHTML = String([die1, die2, die3][index]);
        }
      });

      // PROCESS ROLL TYPES
      RollHandler(playersLength, rollArray_string, rollTypeHolder,rollPointHolder, currentPlayerData, die1, die2, die3);

    });
  });
}
