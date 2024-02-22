import {React} from 'react';
import Typography from '../../Components/Typography';

function Gameboard({sectionClasses}) {
  return (
    <>
      <section id="gameBoard" className={`${sectionClasses} hidden`}>
        <Typography tagType='h2' label='Gamebord here' />
      </section>
    </>
  );
}

export default Gameboard;
