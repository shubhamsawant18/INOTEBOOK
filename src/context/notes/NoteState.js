// NoteState.js
import React, { createContext, useState } from 'react';

const NoteContext = createContext();

const NoteState = (props) => {
 
  return (
    <NoteContext.Provider value={{ }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export { NoteContext, NoteState };
