export const threeDbuttonStyling: string[] = ['bg-blue-500', 'hover:bg-blue-400', 'text-white', 'font-bold', 'py-2', 'px-4', 'border-b-4', 'border-blue-700', 'hover:border-blue-500', 'rounded'];

export const threeDbuttonStylingDisabled: string[] = ['bg-slate-500', 'text-white', 'font-bold', 'py-2', 'px-4', 'border-b-4', 'border-slate-700', 'rounded'];

export const boldTreatment = (optClass: string | null) => {
  if (optClass === null) {
    return 'font-bold';
  } else {
    return `font-bold ${optClass}`;
  }
};

export const rollTypeTreatment = (
  rollType: string,
  rollPoint: number,
  rollArray_string: string,
  rollCode: number,
  rollPointHolder: HTMLElement,
  currentPlayerData: any
) => {
  console.log(`rollType, ${rollType}`);
  console.log(`rollPoint, ${rollPoint}`);
  console.log(`rollArray_string, ${rollArray_string}`);
  console.log(`rollCode, ${rollCode}`);


  currentPlayerData.rollCode = rollCode;
  currentPlayerData.rollPoints = rollPoint;
  console.log('currentPlayerData', currentPlayerData);

  rollPointHolder.innerHTML = rollPoint.toString();
}
