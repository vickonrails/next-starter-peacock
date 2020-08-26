import React, { ReactElement } from "react";
import { StyledCards } from "../styles/cards.styles";
import Link from "next/link";

interface ICard {
  basePath: string;
  data: {
    title: string;
    slug: string;
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
        <article className="article">
          <Link
            href={`/${basePath}/[id]`}
            as={`/${basePath}/${singleCard.slug}`}
          >
            <a>
              <img src="/images/article-preview.png" />
              <time>Apr 12, 2020</time>
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
