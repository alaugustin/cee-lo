import StartScreen from './StartScreen/StartScreen';
import EnterPlayerName from './EnterPlayerName/EnterPlayerName';
import Gameboard from './Gameboard/Gameboard';
import Typography from './Components/Typography';

const sectionHolderClasses = 'flex flex-col items-center justify-center p-16';
const sectionBorderClasses = 'border-solid border-2 border-sky-500';

function ceeLo() {
  return (
    <>
      <div className={`${sectionHolderClasses} + ${sectionBorderClasses}`}>
        <Typography tagType='h1' label='Welcome to Cee-Lo!' />
      </div>

      <StartScreen sectionClasses={`${sectionHolderClasses} ${sectionBorderClasses}`} />

      <EnterPlayerName sectionClasses={`${sectionHolderClasses} ${sectionBorderClasses}`} />

      <Gameboard sectionClasses={`${sectionHolderClasses} ${sectionBorderClasses}`} />

      {/* <div className='hidden border-solid border-2 border-sky-500'>
        <h2 className='text-4xl'>Roll for Position</h2>
      </div>

      <div className='hidden border-solid border-2 border-sky-500'>
        <h2 className='text-4xl'>Players Roll</h2>
      </div>

      <div className='hidden border-solid border-2 border-sky-500'>
        <h2 className='text-4xl'>Compare Scores</h2>
      </div>

      <div className='hidden border-solid border-2 border-sky-500'>
        <h2 className='text-4xl'>Show Winner</h2>
      </div> */}
    </>
  );
}

export default ceeLo;
