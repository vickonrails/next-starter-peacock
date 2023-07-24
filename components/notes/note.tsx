import React from 'react';
import { Calendar } from 'react-feather';
import { StyledNote, StyledNoteLink } from '../styles/notes.styles';
import Link from 'next/link';

export interface INote {
  title: string;
  id: string;
  slug: string;
  date: Date;
  basePath: string;
  description?: string;
}

const Note = ({ date, title, slug, basePath }: INote) => {
  return (
    <Link href={`/${basePath}/[id]`} as={`/${basePath}/${slug}`}>
      <StyledNoteLink>
        <StyledNote>
          <time>
            <span className="date-icon">
              <Calendar className="icon" />
            </span>
            <p className="date-written">{date.toString()}</p>
          </time>
          <h2>{title}</h2>
        </StyledNote>
      </StyledNoteLink>
    </Link>
  );
};

export default Note;
