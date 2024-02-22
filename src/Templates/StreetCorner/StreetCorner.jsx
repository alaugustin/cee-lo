import { React } from 'react';
import EnterPlayerName from '../EnterPlayerName/EnterPlayerName';
import StartScreen from '../StartScreen/StartScreen';

function Streetcorner({ globalClasses }) {

  return (
    <>
      <StartScreen sectionClasses={globalClasses} />

      <EnterPlayerName sectionClasses={globalClasses} />
    </>
  );
}

export default Streetcorner;
