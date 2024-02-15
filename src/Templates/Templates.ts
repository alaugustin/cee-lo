import { threeDbuttonStyling, threeDbuttonStylingDisabled } from "../Modules/Global";

export function ScoreboardCard(index: number, name: string, rollPoints: number) {
  const commonClass: string = "flex flex-col";

  const cardAlignmentClass = index === 0 ? "items-end pr-2" : "items-start pl-2";
  const buttonStyling = index === 0 ? threeDbuttonStyling.join(' ') : threeDbuttonStylingDisabled.join(' ');
  const buttonDisabledAttribute = index !== 0 ? 'disabled' : '';

  return `
    <div class="${commonClass} ${cardAlignmentClass}">
      <h3 class="text-3xl">Player ${index + 1}</h3>
      <h4 class="text-2xl">${name}</h4>
      <p>Roll Points: <span class="font-bold text-2xl">${rollPoints}</span></p>
      <button class="${buttonStyling}" ${buttonDisabledAttribute}>ROLL</button>
    </div>
  `;


  // const firstCard: string = "items-end pr-2";
  // const lastCard: string = "items-start pl-2";

  // const buttonStyling: string = threeDbuttonStyling.join(' ');
  // const buttonStylingDisabled: string = threeDbuttonStylingDisabled.join(' ');

  // let divOpenTag: string;
  // let playerButton: string;

  // if (index === 0) {
  //   divOpenTag = `<div class="${commonClass} ${firstCard}">`,
  //     playerButton = `<button class="${buttonStyling}">ROLL</button>`
  // } else {
  //   divOpenTag = `<div class="${commonClass} ${lastCard}">`,
  //     playerButton = `<button class="${buttonStylingDisabled}" disabled>ROLL</button>`
  // }

  // return (`
  //   ${divOpenTag}
  //     <h3 class="text-3xl">Player ${index + 1}</h3>
  //     <h4 class="text-2xl">${name}</h4>
  //     <p>Roll Points: <span class="font-bold text-2xl">${rollPoints}</span></p>
  //     ${playerButton}
  //   </div>
  // `)
}
