export function ScoreboardCard(index: number, name: string, rollPoints: number) {
  return (`
    <div>
      <h3>Player ${index + 1}</h3>
      <h4>${name}</h4>
      <p>Roll Points: <span>${rollPoints}</span></p>
      <button class="border-solid border-2">ROLL</button>
    </div>
  `)
}
