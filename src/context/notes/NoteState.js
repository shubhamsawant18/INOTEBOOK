import React, { createContext, useState } from 'react';
import { noteContext } from './noteContext';

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "65ae5cb036e4a4d07493d863",
      "user": "65abf2a0b852840a3f444dac",
      "description": "shivam",
      "tag": "newone yuvi future",
      "date": "2024-01-22T12:16:48.260Z",
      "__v": 0,
      "title": "new yuvraj"
    },
   
    {
      "_id": "65ae5d6cd919e2690a3497dd",
      "user": "65abf2a0b852840a3f444dac",
      "description": "rehan ",
      "tag": "eveningmsdjfhorning2y",
      "date": "2024-01-22T12:19:56.833Z",
      "__v": 0,
      "title": "new rehan"
    },
    {
      "_id": "65ae5e15d919e2690a3497e8",
      "user": "65abf2a0b852840a3f444dac",
      "description": "rvehan ",
      "tag": "eveningmsdjfhvorning2y",
      "date": "2024-01-22T12:22:45.066Z",
      "__v": 0,
      "title": "new Shubham"
    },
   
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export { noteContext, NoteState };