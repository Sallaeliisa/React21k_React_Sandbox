import React from "react";

const NotesList = ({ notes }) => {
  return (
    <div className="container">
      <div className="note">
      <h1>My notes</h1>
      <ul>
        {notes.map((note) => {
          return<li key={note.id}>{note.message}</li>
        })}
      </ul>
    </div>
    </div>
  );
};

export default NotesList;
