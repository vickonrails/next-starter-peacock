import React from "react";

import { Container } from "./container";
import { StyledDesignPlus } from "./styles/index.styles";

const DesignCode = () => {
  return (
    <StyledDesignPlus>
      <Container className="container">
        <div className="text">
          <h2>Design+Code</h2>
          <p>
            In the last 3 years, I've been an engineer, a designer and an
            engineer again.
          </p>
          <p>
            Most of my everyday work falls in between. Having this perspective
            puts me in a good position to suggest design solutions and quickly
            prototype them with code. And I'm loving every part of it!
          </p>
        </div>
        <div className="image">
          <img src="/images/article-preview.png" />
        </div>
      </Container>
    </StyledDesignPlus>
  );
};

export default DesignCode;
