import React, { useContext, useState } from 'react';
import { noteContext } from './noteContext';

const host = "http://localhost:5000"; // Fix the typo in the protocol

const NoteState = (props) => {
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all notes
  const getNotes = async () => {
    try {
      // API Call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhYmYyYTBiODUyODQwYTNmNDQ0ZGFjIn0sImlhdCI6MTcwNTkzNjUyM30.Hs_FUUJjMv-gNbmEpVPM67WxJeG3gNgKfluLkAF-JYg",
        },
      });

      const json = await response.json();
      console.log(json);
      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Add notes
  const addNote = async (title, description, tag) => {
    try {
      // API Call
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhYmYyYTBiODUyODQwYTNmNDQ0ZGFjIn0sImlhdCI6MTcwNTkzNjUyM30.Hs_FUUJjMv-gNbmEpVPM67WxJeG3gNgKfluLkAF-JYg",
        },
        body: JSON.stringify({ title, description, tag }), // Wrap parameters in an object
      });

      const newNote = await response.json();
      setNotes([...notes, newNote]);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Delete notes
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  // Edit notes
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhYmYyYTBiODUyODQwYTNmNDQ0ZGFjIn0sImlhdCI6MTcwNTkzNjUyM30.Hs_FUUJjMv-gNbmEpVPM67WxJeG3gNgKfluLkAF-JYg",
        },
        body: JSON.stringify({ title, description, tag }), // Wrap parameters in an object
      });

      const updatedNote = await response.json();
      const updatedNotes = notes.map((note) =>
        note._id === id ? updatedNote : note
      );
      setNotes(updatedNotes);
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export { noteContext, NoteState };