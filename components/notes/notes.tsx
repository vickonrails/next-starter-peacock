import React from 'react';
import { StyledNotes } from '../styles/notes.styles';
import Note, { INote } from './note';

interface INotes {
  notes: INote[];
  basePath: string;
}

const Notes = ({ notes, basePath }: INotes) => {
  return (
    <StyledNotes>
      {notes.map((note) => (
        <Note
          key={note.id}
          basePath={basePath}
          title={note.title}
          slug={note.slug}
          id={note.id}
          date={note.date}
        />
      ))}
    </StyledNotes>
  );
};

export default Notes;
