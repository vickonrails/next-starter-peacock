import React from 'react';
import { experiments } from '../content/experiments';
import { Container } from './container';
import { ExperimentItem } from '@components'

export function ExperimentsSection() {
  return (
    <section className="my-10">
      <Container>
        <h2 className="mb-4">Experiments</h2>
        <p className="section-intro max-w-4xl mb-6 text-md">
          I try to stage little experiments to help me learn things I find
          interesting. I almost never finish them 🙈. But I learn a lot anyways
        </p>

        <section className="flex flex-wrap">
          {experiments.map((experiment, index) => (
            <ExperimentItem key={index} experiment={experiment} />
          ))}
        </section>
      </Container>
    </section>
  )
};
