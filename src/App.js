import Typography from './Components/Typography';
import Streetcorner from './Templates/StreetCorner/StreetCorner';

const sectionHolderClasses = 'flex flex-col items-center justify-center p-16';
const sectionBorderClasses = 'border-solid border-2 border-sky-500';

function ceeLo() {
  return (
    <>
      <header className={`${sectionHolderClasses} ${sectionBorderClasses}`}>
        <Typography tagType='h1' label='Welcome to Cee-Lo!' />
      </header>

      <Streetcorner globalClasses={`${sectionHolderClasses} ${sectionBorderClasses}`} />

      <footer>Footer here</footer>
    </>
  );
}

export default ceeLo;
