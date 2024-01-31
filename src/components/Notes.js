// Notes.js
import React, { useContext } from 'react';
import { noteContext } from '../context/notes/noteContext';
import Noteitem from './Noteitem';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes } = context;

  return (
    <div className="row">
      <h2>Your Notes</h2>
      <div className="d-flex flex-row">
        {notes.map((note) => (
          <Noteitem key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;