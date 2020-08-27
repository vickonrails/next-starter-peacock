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
    body: ReactElement;
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
              <img src="/images/article-preview.png" />
              <time>{singleCard.date}</time>
              <h2>{singleCard.title}</h2>

              <section>{singleCard.body}</section>
            </a>
          </Link>
        </article>
      ))}
    </StyledCards>
  );
};

export { Cards };
