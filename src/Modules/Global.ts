export const threeDbuttonStyling = ['bg-blue-500', 'hover:bg-blue-400', 'text-white', 'font-bold', 'py-2', 'px-4', 'border-b-4', 'border-blue-700', 'hover:border-blue-500', 'rounded'];

export const threeDbuttonStylingDisabled = ['bg-slate-500', 'text-white', 'font-bold', 'py-2', 'px-4', 'border-b-4', 'border-slate-700', 'rounded'];

export const RollDice = (event: Event | any) => {
  let sides = 6,
    a = Math.floor(Math.random() * sides) + 1,
    b = Math.floor(Math.random() * sides) + 1,
    c = Math.floor(Math.random() * sides) + 1;

  let dieHolders = event.target.parentElement.childNodes[9].children;
  let rollPointHolder = event.target.parentElement.childNodes[5].children[0];

  populateDieBoard(dieHolders, rollPointHolder, a, b, c);
};

export const populateDieBoard = (
  dieHolders: NodeListOf<HTMLElement>,
  rollPointHolder: HTMLElement,
  die1: number,
  die2: number,
  die3: number
) => {
  // let diceArray = [die1, die2, die3];

  Array.from(dieHolders).forEach((holder, index) => {
    const spanElement = holder.querySelector('span') as HTMLElement | null;

    if (spanElement) {
      spanElement.innerHTML = String([die1, die2, die3][index]);
    }
  });

  getRollType(rollPointHolder, die1, die2, die3);
}

export const getRollType = (rollPointHolder: HTMLElement, die1: number, die2: number, die3: number) => {
  const diceArray = [die1, die2, die3];

  let rollArray = diceArray,
    rollArray_sort = rollArray.sort(),
    rollArray_string = rollArray_sort.toString();

  const processFourFiveSix = () => {
    const rollCode = 3;
    const rollPoint = 100;

    rollPointHolder.innerHTML = rollPoint.toString();

    console.log("4,5,6", `rollPoint, ${rollPoint}, rollArray_string, ${rollArray_string}, rollCode, ${rollCode}`);
  };

  const fourFiveSix = () => {
    rollArray_string === "4,5,6" ? processFourFiveSix() : oneTwoThree();
  };

  const processOneTwoThree = () => {
    const rollCode = 0;
    const rollPoint = 0;

    rollPointHolder.innerHTML = rollPoint.toString();

    console.log("1,2,3", `rollPoint, ${rollPoint}, rollArray_string, ${rollArray_string}, rollCode, ${rollCode}`);
  };

  // 123
  const oneTwoThree = () => {
    rollArray_string === "1,2,3" ? processOneTwoThree() : trips();
  };

  const processTrips = () => {
    const rollCode = 2;
    const rollPoint = die1;

    rollPointHolder.innerHTML = rollPoint.toString();

    console.log("trips", `rollPoint, ${rollPoint}, rollArray_string, ${rollArray_string}, rollCode, ${rollCode}`);
  };

  // TRIPS
  const trips = () => {
    (die1 === die2 && die2 === die3) ? processTrips() : point();
  };

  // POINT
  const point = () => {
    const rollCode = 1;
    let rollPoint = 0;

    if (die1 === die2 || die1 === die3 || die2 === die3) {
      rollPoint = die1 === die2 ? die3 : die1 === die3 ? die2 : die1;
    }

    rollPointHolder.innerHTML = rollPoint.toString();

    rollPoint === 0 ?
      console.log('roll again', `rollPoint, ${rollPoint}, rollArray_string, ${rollArray_string}, rollCode, ${rollCode}`) :
      console.log('points roll', `rollPoint, ${rollPoint}, rollArray_string, ${rollArray_string}, rollCode, ${rollCode}`);
  };

  fourFiveSix();
}
