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

  let fourFiveSix = () => {
    if (rollArray_string === "4,5,6") {
      const rollCode = 4;
      const rollPoint = 100;
      rollPointHolder.innerHTML = rollPoint.toString();
      // ceeLoGame.storePlayerScore(rollPoint, playerNumber, rollArray_string, gameRoundIs, rollCode);
      console.log("4,5,6", `rollPoint, ${rollPoint}, rollArray_string, ${rollArray_string}, rollCode, ${rollCode}`);

    } else {
      oneTwoThree();
    }
  }

  // 123
  let oneTwoThree = () => {

    if (rollArray_string === "1,2,3") {
      const rollCode = 2;
      const rollPoint = 0;
      rollPointHolder.innerHTML = rollPoint.toString();
      // ceeLoGame.storePlayerScore(rollPoint, playerNumber, rollArray_string, gameRoundIs, rollCode);
      console.log("1,2,3", `rollPoint, ${rollPoint}, rollArray_string, ${rollArray_string}, rollCode, ${rollCode}`);
    } else {
      trips();
    }
  }

  // TRIPS
  let trips = () => {
    if (die1 === die2 && die2 === die3) {
      const rollCode = 3;
      const rollPoint = die1;
      // ceeLoGame.storePlayerScore(rollPoint, playerNumber, rollArray_string, gameRoundIs, rollCode);
      rollPointHolder.innerHTML = rollPoint.toString();
      console.log("trips", `rollPoint, ${rollPoint}, rollArray_string, ${rollArray_string}, rollCode, ${rollCode}`);
    } else {
      point();
    }
  }

  // POINT
  let point = () => {
    if (die1 === die2) {
      const rollCode = 1;
      const rollPoint = die3;
      rollPointHolder.innerHTML = rollPoint.toString();
      // ceeLoGame.storePlayerScore(rollPoint, playerNumber, rollArray_string, gameRoundIs, rollCode);
      console.log('point', `rollPoint, ${rollPoint}, rollArray_string, ${rollArray_string}, rollCode, ${rollCode}`);
    } else if (die1 === die3) {
      const rollCode = 1;
      const rollPoint = die2;
      rollPointHolder.innerHTML = rollPoint.toString();
      // ceeLoGame.storePlayerScore(rollPoint, playerNumber, rollArray_string, gameRoundIs, rollCode);
      console.log('point', `rollPoint, ${rollPoint}, rollArray_string, ${rollArray_string}, rollCode, ${rollCode}`);

    } else if (die2 === die3) {
      const rollCode = 1;
      const rollPoint = die1;
      rollPointHolder.innerHTML = rollPoint.toString();
      // ceeLoGame.storePlayerScore(rollPoint, playerNumber, rollArray_string, gameRoundIs, rollCode);
      console.log('point', `rollPoint, ${rollPoint}, rollArray_string, ${rollArray_string}, rollCode, ${rollCode}`);
    } else {
      const rollPoint = 0;
      rollPointHolder.innerHTML = rollPoint.toString();
      console.log("Roll again")
    };
  }
  fourFiveSix();
}
