import React from 'react';

import { Container } from '../container';
import siteConfig from '../../config/index.json';
import { StyledHomeHeading } from '../styles/header.styles';

const HomeHeader = () => (
  <StyledHomeHeading>
    <Container>
      <div className="header-container">
        <h1>{siteConfig.author.title}</h1>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: siteConfig.author.description }}
        />
      </div>
    </Container>
  </StyledHomeHeading>
);

export default HomeHeader;
