import React, { ReactElement } from "react";
import { StyledCards } from "../styles/cards.styles";
import Link from "next/link";

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
              <img src={singleCard.previewImage} alt={singleCard.title} />
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
