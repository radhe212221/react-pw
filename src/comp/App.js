import React, { useContext } from 'react';
import { Lang } from './LangProvider';
export default function App() {
  const { useCode, setCode } = useContext(Lang);
  // console.log(data);
  const handleLang = (e) => {
    setCode(e.target.innerHTML);
  };

  return (
    <>
      <button onClick={handleLang}>en</button>
      <button onClick={handleLang}>hi</button>
      <h1>{useCode('welcome')} to App </h1>
      <h1>{useCode('banner')} </h1>
    </>
  );
}
