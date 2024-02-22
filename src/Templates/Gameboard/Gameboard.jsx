import Typography from "../../Components/Typography";

function Gameboard({sectionClasses}) {
  return (
    <>
      <section id="gameBoard" className={sectionClasses}>
        <Typography tagType='h2' label='Gamebord here' />
      </section>
    </>
  );
}

export default Gameboard;
