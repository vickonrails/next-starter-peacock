import React from 'react';
import Note, { INote } from './note';

interface INotes {
  notes: INote[];
  basePath: string;
}

const Notes = ({ notes, basePath }: INotes) => {
  return (
    <section>
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
    </section>
  );
};

export default Notes;
