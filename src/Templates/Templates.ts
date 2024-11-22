import { BoldTreatment } from '../Modules/Global';
import { ThreeDbuttonStyling, ThreeDbuttonStylingDisabled } from '../Modules/Global';

const commonClass: string = 'playerColumn flex flex-col';
const dieStyling: string = BoldTreatment('text-3xl');

export function ScoreboardCard(
  index: number,
  name: string,
  rollPoints: number,
  rollType: string
) {
  const cardAlignmentClass: string = index === 0 ? 'items-end pr-2' : 'items-start pl-2';
  const buttonStyling = index === 0 ? ThreeDbuttonStyling.join(' ') : ThreeDbuttonStylingDisabled.join(' ');
  const buttonDisabledAttribute: string = index !== 0 ? 'disabled' : '';

  return `
    <div id="player${index + 1}" class="${commonClass} ${cardAlignmentClass}">
      <h3 class="text-3xl">Player ${index + 1}</h3>
      <h4 class="text-2xl">${name}</h4>
      <p>Roll Type: <span class="rollTypeHolder ${BoldTreatment('text-2xl')}">${rollType}</span></p>
      <p>Roll Points: <span class="rollPointHolder ${BoldTreatment('text-2xl')}">${rollPoints}</span></p>
      <table border="1">
        <tr>
          <th>Win</th>
          <th class="px-3">Loss</th>
          <th>Tie</th>
        </tr>
        <tr>
          <td class="win">-</td>
          <td class="loss px-3">-</td>
          <td class="tie">-</td>
        </tr>
      </table>
      <button class="${buttonStyling}" ${buttonDisabledAttribute}>ROLL</button>
      <div class="diceHolder flex flex-row">
        <div class="${BoldTreatment(null)}">
          Die 1: <span class="die1 ${dieStyling}">-</span>
        </div>

        <div class="${BoldTreatment('px-2')}">
          Die 2: <span class="die2 ${dieStyling}">-</span>
        </div>

        <div class="${BoldTreatment(null)}">
          Die 3: <span class="die3 ${dieStyling}">-</span>
        </div>
      </div>
    </div>
  `;
}
