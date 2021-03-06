import React from "react";
import Link from "next/link";
import Image from 'next/image'

import { StyledCards } from "../styles/cards.styles";

interface ICard {
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
        <article className="article" key={singleCard.id}>
          <Link
            href={`/${basePath}/[id]`}
            as={`/${basePath}/${singleCard.slug}`}
          >
            <a>
              {/* @ts-ignore */}
              <Image src={singleCard.previewImage} alt={singleCard.title} width={450} height={220} sizes="(min-width: 640px) 700px, 400px"/>
              <time>{singleCard.date}</time>
              <h2>{singleCard.title}</h2>

              {singleCard.description && <p>{singleCard.description}</p>}
            </a>
          </Link>
        </article>
      ))}
    </StyledCards>
  );
};

export { Cards };
