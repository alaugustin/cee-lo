import { React } from 'react';
import Typography from '../../Components/Typography';

function Header({ sectionClasses }) {
  return (
    <>
      <header className={sectionClasses}>
        <Typography tagType='h1' label='Welcome to Cee-Lo!' />
      </header>
    </>
  );
}

export default Header;
