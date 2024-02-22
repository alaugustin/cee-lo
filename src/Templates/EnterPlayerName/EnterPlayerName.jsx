import Button from "../../Components/Button";
import Typography from "../../Components/Typography";

const inputClasses = 'border-solid border-2 border-sky-500';

console.log(document.getElementById('enterPlayer'));
console.log(document.getElementById('gameBoard'));

function EnterPlayerName({ sectionClasses }) {
  return (
    <>
      <section id="enterPlayer" className={`${sectionClasses} hidden`}>
        <Typography tagType='h2' label='Enter Player Name' />

        <input id='nameInput' className={inputClasses} type='text' />

        <Button label='PLAY' />
      </section>
    </>
  );
}

export default EnterPlayerName;
