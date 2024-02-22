import Button from "../Components/Button";
import Typography from "../Components/Typography";

function EnterPlayerName({ sectionClasses }) {
  return (
    <>
      <div className={sectionClasses}>
        <Typography tagType='h2' label='Enter Player Name' />

        <input id='nameInput' className="border-solid border-2 border-sky-500" type='text' />

        <Button label='PLAY' />
      </div>
    </>
  );
}

export default EnterPlayerName;
