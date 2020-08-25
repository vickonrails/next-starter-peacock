import React, { ReactElement } from "react";
import { StyledCards } from "../styles/cards.styles";
import Link from "next/link";

interface ICard {
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
const Cards = ({ data }: ICard) => {
  return (
    <StyledCards>
      {data.map((singleCard) => (
        <article className="article">
          <Link href="/work/[id]" as={`/work/${singleCard.slug}`}>
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
