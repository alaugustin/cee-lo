export function ScoreboardCard(index: number, name: string, rollPoints: number) {
  const commonClass: string = "flex flex-col";
  const firstCard: string = "items-end pr-2";
  const lastCard: string = "items-start pl-2";

  let divOpenTag: string;

  if (index === 0) {
    divOpenTag = `<div class="${commonClass} ${firstCard}">`
  } else {
    divOpenTag = `<div class="${commonClass} ${lastCard}">`
  }

  return (`
    ${divOpenTag}
      <h3 class="text-3xl">Player ${index + 1}</h3>
      <h4 class="text-2xl">${name}</h4>
      <p>Roll Points: <span class="font-bold text-2xl">${rollPoints}</span></p>
      <button class="border-solid border-2">ROLL</button>
    </div>
  `)
}
