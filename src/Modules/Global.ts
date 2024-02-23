export const threeDbuttonStyling:string[] = ['bg-blue-500', 'hover:bg-blue-400', 'text-white', 'font-bold', 'py-2', 'px-4', 'border-b-4', 'border-blue-700', 'hover:border-blue-500', 'rounded'];

export const threeDbuttonStylingDisabled:string[] = ['bg-slate-500', 'text-white', 'font-bold', 'py-2', 'px-4', 'border-b-4', 'border-slate-700', 'rounded'];

export const boldTreatment = (optClass: string | null) => {
  if (optClass === null) {
    return 'font-bold';
  } else {
    return `font-bold ${optClass}`;
  }
};

export const RollDice = (event: Event | any) => {
  const sides = 6,
    a = Math.floor(Math.random() * sides) + 1,
    b = Math.floor(Math.random() * sides) + 1,
    c = Math.floor(Math.random() * sides) + 1;

  const dieHolders = event.target.parentElement.childNodes[9].children;
  const rollPointHolder = event.target.parentElement.childNodes[5].children[0];

  populateDieBoard(dieHolders, rollPointHolder, a, b, c);
};

export const populateDieBoard = (
  dieHolders: NodeListOf<HTMLElement>,
  rollPointHolder: HTMLElement,
  die1: number,
  die2: number,
  die3: number
) => {
  Array.from(dieHolders).forEach((holder, index) => {
    const spanElement = holder.querySelector('span') as HTMLElement | null;

    if (spanElement) {
      spanElement.innerHTML = String([die1, die2, die3][index]);
    }
  });

  getRollType(rollPointHolder, die1, die2, die3);
}

export const rollTypeTreatment = (
  rollType: string,
  rollPoint: number,
  rollArray_string: string,
  rollCode: number,
  rollPointHolder: HTMLElement
) => {
  console.log(
    rollType,
    `rollPoint, ${rollPoint},
      rollArray_string, ${rollArray_string},
      rollCode, ${rollCode}`
  );

  rollPointHolder.innerHTML = rollPoint.toString();
}

export const getRollType = (
  rollPointHolder: HTMLElement,
  die1: number,
  die2: number,
  die3: number
) => {
  const diceArray = [die1, die2, die3];
  const rollArray = diceArray,
    rollArray_sort = rollArray.sort(),
    rollArray_string = rollArray_sort.toString();

  // ------- 456
  const processFourFiveSix = () => {
    const rollCode = 3;
    const rollPoint = 100;

    rollTypeTreatment('4,5,6', rollPoint, rollArray_string, rollCode, rollPointHolder);
  };

  const fourFiveSix = () => {
    rollArray_string === '4,5,6' ? processFourFiveSix() : oneTwoThree();
  };

  // ------- 123
  const processOneTwoThree = () => {
    const rollCode = 0;
    const rollPoint = 0;

    rollTypeTreatment('1,2,3', rollPoint, rollArray_string, rollCode, rollPointHolder);
  };

  const oneTwoThree = () => {
    rollArray_string === '1,2,3' ? processOneTwoThree() : trips();
  };

  // ------- TRIPS
  const processTrips = () => {
    const rollCode = 2;
    const rollPoint = die1;

    rollTypeTreatment('Trips', rollPoint, rollArray_string, rollCode, rollPointHolder);
  };

  const trips = () => {
    (die1 === die2 && die2 === die3) ? processTrips() : point();
  };

  // ------- POINT
  const point = () => {
    const rollCode = 1;
    let rollPoint = 0;

    if (die1 === die2 || die1 === die3 || die2 === die3) {
      rollPoint = die1 === die2 ? die3 : die1 === die3 ? die2 : die1;
    }

    rollPoint === 0 ?
      rollTypeTreatment('Roll again', rollPoint, rollArray_string, rollCode, rollPointHolder) : rollTypeTreatment('points roll', rollPoint, rollArray_string, rollCode, rollPointHolder);
  };

  fourFiveSix();
}
