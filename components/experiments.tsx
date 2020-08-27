import React from "react";
import styled from "@emotion/styled";
import { experiments } from "../content/experiments";
import { Container } from "./container";
import { StyledExperimentsSection } from "./styles/experiments.styles";
import ExperimentItem from "./experiment";

const ExperimentsSection = () => (
  <StyledExperimentsSection>
    <Container>
      <h2>Experiments</h2>
      <p className="section-intro max-width">
        I try to stage little experiments to help me learn things I find
        interesting. I almost never finish them 🙈. But I learn a lot anyways
      </p>

      <section className="experiments">
        {experiments.map((experiment, index) => (
          <ExperimentItem key={index} experiment={experiment} />
        ))}
      </section>
    </Container>
  </StyledExperimentsSection>
);

export default ExperimentsSection;
