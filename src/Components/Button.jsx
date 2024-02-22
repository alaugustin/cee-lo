import { React } from 'react';

function Button({ label, clickFunction }) {
  return (
    <>
      <button className="border-solid border-2 border-sky-700" onClick={clickFunction}>{label}</button>
    </>
  );
}

export default Button;
