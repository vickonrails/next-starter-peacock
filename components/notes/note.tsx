import Link from 'next/link';
import React from 'react';
import { Calendar } from 'react-feather';
import { StyledNote, StyledNoteLink } from '../styles/notes.styles';

export interface INote {
  title: string;
  id: string;
  slug: string;
  date: Date;
  basePath: string;
  description?: string;
}

const Note = ({
  title,
  slug,
  date,
  basePath,
}: Omit<INote, 'id' | 'description'>) => {
  return (
    <Link href={`/${basePath}/[id]`} as={`/${basePath}/${slug}`} passHref>
      <StyledNoteLink>
        <StyledNote>
          <time>
            <span className="date-icon">
              <Calendar className="icon" />
            </span>
            <p className="date-written">{date}</p>
          </time>
          <h2>{title}</h2>
        </StyledNote>
      </StyledNoteLink>
    </Link>
  );
};

export default Note;
