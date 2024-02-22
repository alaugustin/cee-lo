import Button from "../Components/Button";
import Typography from "../Components/Typography";

function StartScreen({ sectionClasses }) {
  return (
    <>
      <div className={sectionClasses}>
        <Typography tagType='h2' label='Press Start Button' />

        <Button label='START'/>
      </div>
    </>
  );
}

export default StartScreen;
