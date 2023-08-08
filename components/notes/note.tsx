import React from 'react';
import { Calendar } from 'react-feather';
import Link from 'next/link';

export interface INote {
  title: string;
  id: string;
  slug: string;
  date: Date;
  basePath: string;
  description?: string;
}

// TODO: make a time component

const Note = ({ date, title, slug, basePath }: INote) => {
  return (
    <Link href={`/${basePath}/[id]`} as={`/${basePath}/${slug}`} className="cursor-pointer no-underline hover:underline">
      <article className="flex flex-col mb-4 sm:mb-0 sm:flex-row sm:items-center">
        <time className="flex w-52 text-sm items-center">
          <span className="date-icon">
            <Calendar className="text-[#808080] mr-3" size={16} />
          </span>
          <p className="text-[#808080] m-0">{date.toString()}</p>
        </time>
        <h2 className="sm:text-2xl text-xl mb-2">{title}</h2>
      </article>
    </Link>
  );
};

export default Note;
