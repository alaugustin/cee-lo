import EnterPlayerName from "../EnterPlayerName/EnterPlayerName";
import Gameboard from "../Gameboard/Gameboard";
import StartScreen from "../StartScreen/StartScreen";

function Streetcorner({globalClasses}) {

  return (
    <>
      <StartScreen sectionClasses={globalClasses} />

      <EnterPlayerName sectionClasses={globalClasses} />

      <Gameboard sectionClasses={globalClasses} />
    </>
  );
}

export default Streetcorner;
