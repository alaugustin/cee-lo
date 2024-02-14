const startButton = document.getElementById('startButton');

const startGame = () => {
  console.log('startButton clicked')
}

export function StartGame() {
  startButton.addEventListener("click", startGame);
  console.log(`startGame code here`);
};
