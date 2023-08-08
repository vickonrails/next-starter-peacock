import React from 'react';
import Image from 'next/image'

import { Container } from './container';

// TODO: make the text library a bit more formal 
// maybe have a typography component
const DesignCode = () => {
  return (
    <section className="py-10 text-body-text bg-home-page-pattern bg-white">
      <Container className="md:flex items-center flex-wrap">
        <div className="md:flex-1 sm:mb-4 md:mr-[5%]">
          <h2 className="text-3xl text-neutral-800 mb-4 font-bold lg:text-5xl">Design+Code</h2>
          <p className="text-neutral-800 mb-2">
            In the last 3 years, I&apos;ve been an engineer, a designer and an
            engineer again.
          </p>
          <p className="text-neutral-800">
            Most of my everyday work falls in between. Having this perspective
            puts me in a good position to suggest design solutions and quickly
            prototype them with code. And I&apos;m loving every part of it!
          </p>
        </div>
        <div className="md:flex-1">
          <Image
            src="/images/article-preview.png"
            height={200}
            width={350}
            sizes="(min-width: 759px) 800px"
            alt=""
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export default DesignCode;
