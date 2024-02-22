import StartScreen from './StartScreen/StartScreen';
import EnterPlayerName from './EnterPlayerName/EnterPlayerName';
import Gameboard from './Gameboard/Gameboard';
import Typography from './Components/Typography';

const sectionHolderClasses = 'flex flex-col items-center justify-center p-16';
const sectionBorderClasses = 'border-solid border-2 border-sky-500';

function ceeLo() {
  return (
    <>
      <header className={`${sectionHolderClasses} + ${sectionBorderClasses}`}>
        <Typography tagType='h1' label='Welcome to Cee-Lo!' />
      </header>

      <StartScreen sectionClasses={`${sectionHolderClasses} ${sectionBorderClasses}`} />

      <EnterPlayerName sectionClasses={`${sectionHolderClasses} ${sectionBorderClasses}`} />

      <Gameboard sectionClasses={`${sectionHolderClasses} ${sectionBorderClasses}`} />

      <footer>Footer here</footer>
    </>
  );
}

export default ceeLo;
