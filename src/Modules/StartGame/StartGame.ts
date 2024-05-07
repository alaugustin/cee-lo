import { PlayerSignIn } from '../PlayerSignIn/PlayerSignIn';
import { GlobalGameData as GameData  } from '../Global';
import {IStartGameProps} from './StartGame.d';

const startButton: HTMLElement = document.getElementById('startButton');
const startScreenHolder: HTMLElement = document.getElementById('startScreen');
const playerSignInHolder: HTMLElement = document.getElementById('playerSignIn');

const startGame = (data: any) => {
  startScreenHolder?.classList.add('hidden');
  playerSignInHolder?.classList.remove('hidden');

  data.gameRound = 1;

  GameData.gameRound = data.gameRound;
  GameData.gameRounds = data.gameRounds;

  PlayerSignIn();
}

export function StartGame(dataInput: IStartGameProps) {
  startButton?.addEventListener('click', startGame.bind(null, dataInput));
}
