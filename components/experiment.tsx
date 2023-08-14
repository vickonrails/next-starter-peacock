'use client'
import React from 'react';
import { GitHub, Codepen, ExternalLink } from 'react-feather';
import Tilt from 'react-parallax-tilt';

const ExperimentItem = ({ experiment }) => {
  let icon;
  const classes = 'text-bright'

  switch (experiment.location) {
    case 'codepen':
      icon = <Codepen role="img" className={classes} size={18} />;
      break;
    case 'github':
      icon = <GitHub role="img" className={classes} size={18} />;
      break;
    case 'medium':
    default:
      icon = <ExternalLink className={classes} role="img" size={18} />;
  }

  return (
    <Tilt
      scale={1}
      transitionSpeed={200}
      className="rounded bg-light mb-3 p-3 cursor-pointer sm:mx-2 sm:mb-4 sm:basis-[40%] sm:flex-grow sm:flex-shrink lg:basis-[30%]"
    >
      <a
        className="no-underline"
        href={experiment.link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="flex items-center justify-between">
          <time className="time">{experiment.date}</time>
          <span>{icon}</span>
        </div>
        <h3 className="mb-2 text-base">{experiment.title}</h3>
        <p className="mb-2">{experiment.description}</p>
        <ul className="list-none">
          {experiment.tags.map((tag, index) => (
            <li key={index} className="inline-block text-xs mr-2 border-2 border-primary text-primary py-1 px-3 mb-1">{tag}</li>
          ))}
        </ul>
      </a>
    </Tilt>
  );
};

export default ExperimentItem;
