import React, { useState, useEffect, createContext } from 'react';
import lang from '../lang';
export const Lang = createContext(lang);

export default function Lang({ children }) {
  const [code, setCode] = useState('en');
  const useCode = (key) => {
    return lang[code][key];
  };

  const value = {
    code,
    setCode,
    useCode,
  };

  return <Lang.Provider value={value}>{children}</Lang.Provider>;
}
