import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import clsx from 'clsx';
import { IContent } from '../../lib/content';

export interface ICard {
  basePath: string;
  items: IContent[]
}

/**
 * Renders a grid of cards
 * @param {Array} data Data to display in grid
 */

const Cards = ({ items, basePath }: ICard) => {
  return (
    <section className="flex sm:flex-row flex-col flex-wrap md:justify-start text-bright ">
      {items.map((singleCard, idx) => (
        <article
          className={
            clsx(
              'article mb-[2%] overflow-hidden hover:text-white group sm:basis-[47%] lg:basis-[32%]',
              (idx === items.length - 1) ? 'sm:mr-0' : 'sm:mr-2'
            )
          }
          key={singleCard.slug}
        >
          <Link
            href={`/${basePath}/[id]`}
            as={`/${basePath}/${singleCard.slug}`}
            className="no-underline"
          >
            <Image
              src={singleCard.previewImage!}
              alt=""
              width={450}
              height={220}
              sizes="(min-width: 640px) 700px, 400px"
              className="w-full object-cover mb-[0.4rem] transition-transform duration-200 group-hover:scale-110"
            />
            <time className="time text-left">
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
