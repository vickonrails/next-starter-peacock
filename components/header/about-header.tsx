import React from "react";

import Container from "../container";
import siteConfig from "../../config/index.json";
import { StyledHomeHeading } from "../styles/header.styles";

const AboutHeader = () => (
  <StyledHomeHeading>
    <Container>
      <div className="header-container">
        <h1>A Little About Me</h1>
      </div>
    </Container>
  </StyledHomeHeading>
);

export default AboutHeader;
