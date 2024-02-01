// Notes.js
import React, { useContext } from 'react';
import { noteContext } from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes } = context;

  // Split the notes into arrays of 4 for each row
  const chunkedNotes = [];
  for (let i = 0; i < notes.length; i += 4) {
    chunkedNotes.push(notes.slice(i, i + 4));
  }

  return (
    <div className="container ml-3"> {/* Added margin to the left */}
      <AddNote />
      <div className="row">
        <h2>Your Notes</h2>
        {chunkedNotes.map((row, index) => (
          <div key={index} className="d-flex flex-row">
            {row.map((note) => (
              <Noteitem key={note._id} note={note} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
