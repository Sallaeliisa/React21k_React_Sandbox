import React from "react";

const NotesList = ({ notes }) => {
  return (
    <div className="container">
    <div className="note">
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => {
          return (
              <div className="savedNotes">
            <li key={note.id}>
              {note.message}
            </li>
            </div>
          );
        })}
      </ul>
      </div>
    </div>
  );
};

export default NotesList;
