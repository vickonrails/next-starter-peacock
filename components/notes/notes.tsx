import React from 'react';
import { Note } from './note';
import { IContent } from '../../lib/content';

interface INotes {
  notes: IContent[];
  basePath: string;
}

export function Notes({ notes, basePath }: INotes) {
  return (
    <section>
      {notes.map((note) => (
        <Note
          key={note.slug}
          basePath={basePath}
          title={note.title}
          slug={note.slug}
          date={note.date}
        />
      ))}
    </section>
  );
};

export default Notes;
