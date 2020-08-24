import React from "react";
import { StyledCards } from "../styles/cards.styles";
import Link from "next/link";

const Cards = () => {
  return (
    <StyledCards>
      <article className="article">
        <Link href="/">
          <a>
            <img src="/images/article-preview.png" />
            <time>Apr 12, 2020</time>
            <h2>Designing Experiences at</h2>

            <section>
              <p>
                The HTML element represents a specific period in time. It may
                include the datetime attribute to translate dates into
                machine-readable format.
              </p>
            </section>
          </a>
        </Link>
      </article>

      <article className="article">
        <Link href="/">
          <a>
            <img src="/images/article-preview.png" />
            <time>Apr 12, 2020</time>
            <h2>Designing Experiences at</h2>

            <section>
              <p>
                The HTML element represents a specific period in time. It may
                include the datetime attribute to translate dates into
                machine-readable format.
              </p>
            </section>
          </a>
        </Link>
      </article>

      <article className="article">
        <Link href="/">
          <a>
            <img src="/images/article-preview.png" />
            <time>Apr 12, 2020</time>
            <h2>Designing Experiences at</h2>

            <section>
              <p>
                The HTML element represents a specific period in time. It may
                include the datetime attribute to translate dates into
                machine-readable format.
              </p>
            </section>
          </a>
        </Link>
      </article>
    </StyledCards>
  );
};

export { Cards };
