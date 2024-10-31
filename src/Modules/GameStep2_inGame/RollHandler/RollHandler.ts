export function TheRollHandler(playerNumber: number, autoRoll: boolean) {
  if (playerNumber === 1) {
    console.log(`
    - roll player 1 (💻 BANKER auto-roll is ${autoRoll})
      - roll analysis
        - if 456
          - banker 1 wins
        - if trips
          - log trips point
        - if point
          - log point
        - if 123
          - banker 1 looses
    `);
  }

  if (playerNumber === 2) {
    console.log(`
      - roll player 2 (🧍 auto-roll is ${autoRoll} player push roll button)
        - roll analysis
          - if 456
            - player 2 wins
          - if trips
            - log trips point
          - if point
            - log point
          - if 123
            - player 2 looses
    `);
  }
}
