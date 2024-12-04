import {
  ThreeDbuttonStyling,
  ThreeDbuttonStylingDisabled
} from '../Modules/Global';
import {
  BoldTreatment,
  HeaderTextSize
} from '../Modules/GlobalHelperFunc';

const flexCol = 'flex flex-col' as string;
const commonClass = `playerColumn ${flexCol}` as string;
const dieStyling = BoldTreatment('text-xs') as string;
const columnStyling = `${flexCol} w-12 sm:w-16 items-center justify-center` as string;

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
  const playerRollType = rollType !== '' ? rollType : '-';
  const playerRollPoints = rollPoints !== 0 ? rollPoints : '-';

  return `
    <div id="player${playerIndex}" class="${commonClass} ${cardAlignmentClass}">
      <h3 class="${HeaderTextSize(3)} mb-2">Player ${playerIndex}</h3>
      <h4 class="${HeaderTextSize(2)} mb-2">${name}</h4>
      <p class="${flexCol} ${cardAlignmentClass} h-14 mb-1">Roll Type: <span class="rollTypeHolder ${BoldTreatment('text-xl')}">${playerRollType}</span></p>
      <p class="${flexCol} ${cardAlignmentClass} h-14">Roll Points: <span class="rollPointHolder ${BoldTreatment('text-2xl')}">${playerRollPoints}</span></p>
      <button class="${buttonStyling}" ${buttonDisabledAttribute}>ROLL</button>
      <div class="diceHolder pt-2 flex flex-row h-[56px]">
        <div class="${BoldTreatment(null)} ${columnStyling}">
          <span class="die1 ${dieStyling}"></span>
          <span class="die1 icon">◻︎</span>
        </div>

        <div class="${BoldTreatment('px-2')} ${columnStyling}">
          <span class="die2 ${dieStyling}"></span>
          <span class="die2 icon">◻︎</span>
        </div>

        <div class="${BoldTreatment(null)} ${columnStyling}">
          <span class="die3 ${dieStyling}"></span>
          <span class="die3 icon">◻︎</span>
        </div>
      </div>
    </div>
  `;
}
