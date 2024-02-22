import { React } from 'react';
import Button from '../../Components/Button';
import Typography from '../../Components/Typography';

function startGame() {
  const startScreen = document.getElementById('startScreen');

  startScreen.classList.add('hidden');
  document.getElementById('enterPlayer').classList.remove('hidden');
}

function StartScreen({ sectionClasses }) {
  return (
    <>
      <section id='startScreen' className={sectionClasses}>
        <Typography tagType='h2' label='Press Start Button' />

        <Button label='START' clickFunction={startGame} />
      </section>
    </>
  );
}

export default StartScreen;
