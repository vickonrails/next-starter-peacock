import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import clsx from 'clsx';

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
    <section className="flex sm:flex-row flex-col flex-wrap md:justify-between text-bright ">
      {data.map((singleCard, idx) => (
        <article
          className={
            clsx(
              'article mb-[2%] overflow-hidden hover:text-white group sm:basis-[48%] lg:basis-[32.5%]',
              (idx === data.length - 1) ? 'sm:mr-0' : 'sm:mr-2'
            )
          }
          key={singleCard.id}
        >
          <Link
            href={`/${basePath}/[id]`}
            as={`/${basePath}/${singleCard.slug}`}
            className="no-underline"
          >
            <Image
              src={singleCard.previewImage}
              alt=""
              width={450}
              height={220}
              sizes="(min-width: 640px) 700px, 400px"
              className="w-full object-cover mb-[0.4rem] transition-transform duration-200 group-hover:scale-110"
            />
            <time className="text-sm text-bright">
              {singleCard.date.toString()}
            </time>
            <h2
              className="font-bold text-lg mb-1 text-body-text group-hover:underline group-hover:text-white"
            >
              {singleCard.title}
            </h2>

            {singleCard.description && (
              <p className="text-bright group-hover:text-body-text">
                {singleCard.description}
              </p>
            )}
          </Link>
        </article>
      ))}
    </section>
  );
};

export { Cards };
