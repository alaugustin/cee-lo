import { boldTreatment } from '../Modules/Global';
import { threeDbuttonStyling, threeDbuttonStylingDisabled } from '../Modules/Global';

export function ScoreboardCard(index: number, name: string, rollPoints: number) {
  const commonClass: string = 'flex flex-col';

  const cardAlignmentClass: string = index === 0 ? 'items-end pr-2' : 'items-start pl-2';
  const buttonStyling = index === 0 ? threeDbuttonStyling.join(' ') : threeDbuttonStylingDisabled.join(' ');
  const buttonDisabledAttribute: string = index !== 0 ? 'disabled' : '';
  const dieStyling: string = boldTreatment('text-3xl');

  return `
    <div class="${commonClass} ${cardAlignmentClass}">
      <h3 class="text-3xl">Player ${index + 1}</h3>
      <h4 class="text-2xl">${name}</h4>
      <p>Roll Points: <span class="${boldTreatment('text-2xl')} font-bold text-2xl">${rollPoints}</span></p>
      <button class="${buttonStyling}" ${buttonDisabledAttribute}>ROLL</button>
      <div class="diceHolder flex flex-row">
        <div class="${boldTreatment(null)}">
          Die 1: <span class="die1 ${dieStyling}">-</span>
        </div>

        <div class="${boldTreatment('px-2')}">
          Die 2: <span class="die2 ${dieStyling}">-</span>
        </div>

        <div class="${boldTreatment(null)}">
          Die 3: <span class="die3 ${dieStyling}">-</span>
        </div>
      </div>
    </div>
  `;
}
