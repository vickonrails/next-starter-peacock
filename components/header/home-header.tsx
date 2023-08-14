import React from 'react';

import { Container } from '../container';
import siteConfig from '../../config/index.json';

const HomeHeader = () => (
  <Container>
    <div className="xl:max-w-[70%] 2xl:max-w-[80%]">
      <h1>{siteConfig.author.title}</h1>
      <p
        className="mb-8 md:text-lg md:max-w-2xl lg:max-w-4xl xl:text-lg"
        dangerouslySetInnerHTML={{ __html: siteConfig.author.description }}
      />
    </div>
  </Container>
);

export default HomeHeader;
