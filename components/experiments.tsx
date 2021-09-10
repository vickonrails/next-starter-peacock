import React from 'react';
import { experiments } from '../content/experiments';
import { Container } from './container';
import ExperimentItem from './experiment';
import { StyledExperimentsSection } from './styles/experiments.styles';

const ExperimentsSection = () => (
  <StyledExperimentsSection>
    <Container>
      <h2>Experiments</h2>
      <p className="section-intro max-width">
        I try to stage little experiments to help me learn things I find
        interesting. I almost never finish them
        <span aria-label="monkey-don't-wanna-see" role="img">
          🙈
        </span>
        . But I learn a lot anyways
      </p>

      <section className="experiments">
        {experiments.map((experiment) => (
          <ExperimentItem
            key={`${experiment.title}-${experiment.location}`}
            experiment={experiment}
          />
        ))}
      </section>
    </Container>
  </StyledExperimentsSection>
);

export default ExperimentsSection;
