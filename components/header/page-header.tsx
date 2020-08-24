import React, { HTMLAttributes } from "react";

import { Container } from "../container";
import { StyledPageHeading } from "../styles/header.styles";

interface IPageHeader extends HTMLAttributes<HTMLHeadingElement> {
  headingTitle: string;
}

const PageHeader = ({ headingTitle }: IPageHeader) => (
  <StyledPageHeading>
    <Container>
      <div className="header-container">
        <h1>{headingTitle}</h1>
      </div>
    </Container>
  </StyledPageHeading>
);

export default PageHeader;
