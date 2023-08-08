import React from 'react';

import { Container } from '../container';
import siteConfig from '../../config/index.json';

const HomeHeader = () => (
  <Container className="xl:max-w-[70%] 2xl:max-w-[80%]">
    <h1 className="max-w-[80%]">{siteConfig.author.title}</h1>
    <p
      className="text-xl mb-6 leading-7"
      dangerouslySetInnerHTML={{ __html: siteConfig.author.description }}
    />
  </Container>
);

export default HomeHeader;
