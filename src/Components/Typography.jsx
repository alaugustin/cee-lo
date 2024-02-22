import { React } from 'react';

function Typography({ tagType, label }) {
  let typographyObj;

  switch (tagType) {
    case 'h1':
      typographyObj = <h1 className='text-5xl'>{label}</h1>;
      break;
    case 'h2':
      typographyObj = <h2 className='text-4xl'>{label}</h2>;
      break;
    case 'h3':
      typographyObj = <h3 className='text-3xl'>{label}</h3>;
      break;
    case 'p':
      typographyObj = <p className={null}>{label}</p>;
      break;
    case 'span':
      typographyObj = <span className={null}>{label}</span>;
      break;
    default:
      console.log(`Sorry, we are out of ${tagType}.`);
  }

  return (
    <>
      {typographyObj}
    </>
  );
}

export default Typography;
