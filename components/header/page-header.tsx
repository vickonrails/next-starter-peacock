import React, { HTMLAttributes } from 'react';

import { Container } from '../container';

interface IPageHeader extends HTMLAttributes<HTMLHeadingElement> {
  headingTitle: string;
}

const PageHeader = ({ headingTitle }: IPageHeader) => (
  <Container>
    <h1 className="max-w-[80%] text-center my-0 mx-auto mb-4">{headingTitle}</h1>
  </Container>
);

export default PageHeader;
