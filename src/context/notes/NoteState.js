// NoteState.js
import React, { createContext, useState } from 'react';

const NoteContext = createContext();

const NoteState = (props) => {
  const s1 = {
    name: 'Anaira',
    class: 'first',
  };

  const [state, setstate] = useState(s1);

  const update = () => {
    setTimeout(() => {
      setstate((prevState) => ({
        ...prevState,
        name: 'Larry',
        class: '10b',
      }));
    }, 1000);
  };

  return (
    <NoteContext.Provider value={{ state: state, update: update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export { NoteContext, NoteState };
