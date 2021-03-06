import React from "react";
import Image from 'next/image'

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
          <Image src="/images/article-preview.png" height={200} width={350} sizes="(min-width: 759px) 800px" alt="article preview" />
        </div>
      </Container>
    </StyledDesignPlus>
  );
};

export default DesignCode;
