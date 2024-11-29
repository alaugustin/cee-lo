import {
  BoldTreatment,
  ThreeDbuttonStyling,
  ThreeDbuttonStylingDisabled,
  HeaderTextSize
} from '../Modules/Global';

const flexCol = 'flex flex-col' as string;
const commonClass = `playerColumn ${flexCol}` as string;
const dieStyling = BoldTreatment('text-xs') as string;
const columnStyling = `${flexCol} w-16 items-center justify-center` as string;

export function ScoreboardCard(
  index: number,
  name: string,
  rollPoints: number,
  rollType: string
) {
  const cardAlignmentClass = index === 0 ? 'items-end pr-2' : 'items-start pl-2' as string;
  const buttonStyling = index === 0 ? ThreeDbuttonStyling.join(' ') : ThreeDbuttonStylingDisabled.join(' ') as string;
  const buttonDisabledAttribute = index !== 0 ? 'disabled' : '' as string;
  const playerIndex = index + 1;

  return `
    <div id="player${playerIndex}" class="${commonClass} ${cardAlignmentClass}">
      <h3 class="${HeaderTextSize(3)}">Player ${playerIndex}</h3>
      <h4 class="${HeaderTextSize(2)}">${name}</h4>
      <p>Roll Type: <span class="rollTypeHolder ${BoldTreatment('text-2xl')}">${rollType}</span></p>
      <p>Roll Points: <span class="rollPointHolder ${BoldTreatment('text-2xl')}">${rollPoints}</span></p>
      <button class="${buttonStyling}" ${buttonDisabledAttribute}>ROLL</button>
      <div class="diceHolder pt-2 flex flex-row">
        <div class="${BoldTreatment(null)} ${columnStyling}">
          <span class="die1 ${dieStyling}"></span>
          <span class="die1 icon"></span>
        </div>

        <div class="${BoldTreatment('px-2')} ${columnStyling}">
          <span class="die2 ${dieStyling}"></span>
          <span class="die2 icon"></span>
        </div>

        <div class="${BoldTreatment(null)} ${columnStyling}">
          <span class="die3 ${dieStyling}"></span>
          <span class="die3 icon"></span>
        </div>
      </div>
    </div>
  `;
}
