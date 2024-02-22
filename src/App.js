import { React } from 'react';
import Footer from './Templates/Footer/Footer';
import Header from './Templates/Header/Header';
import Streetcorner from './Templates/StreetCorner/StreetCorner';

const sectionHolderClasses = 'flex flex-col items-center justify-center p-16';
const sectionBorderClasses = 'border-solid border-2 border-sky-500';

function ceeLo() {
  return (
    <>
      <Header sectionClasses={`${sectionHolderClasses} ${sectionBorderClasses}`} />

      <Streetcorner globalClasses={`${sectionHolderClasses} ${sectionBorderClasses}`} />

      <Footer />
    </>
  );
}


export default ceeLo;
