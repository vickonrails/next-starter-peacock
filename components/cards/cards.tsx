import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { StyledCards } from '../styles/cards.styles';

export interface ICard {
  basePath: string;
  data: {
    title: string;
    id: string;
    slug: string;
    date: Date;
    previewImage: string;
    description: string;
  }[];
}

/**
 * Renders a grid of cards
 * @param {Array} data Data to display in grid
 */

const Cards = ({ data, basePath }: ICard) => {
  return (
    <StyledCards>
      {data.map((singleCard) => (
        <article className="article" key={`singleCard-${singleCard.id}`}>
          <Link
            href={`/${basePath}/[id]`}
            as={`/${basePath}/${singleCard.slug}`}
          >
            {/* @ts-ignore */}
            <Image
              src={singleCard.previewImage}
              alt={singleCard.title}
              width={450}
              height={220}
              sizes="(min-width: 640px) 700px, 400px"
            />
            <time>{singleCard.date.toString()}</time>
            <h2>{singleCard.title}</h2>

            {!!singleCard.description && <p>{singleCard.description}</p>}
          </Link>
        </article>
      ))}
    </StyledCards>
  );
};

export { Cards };
