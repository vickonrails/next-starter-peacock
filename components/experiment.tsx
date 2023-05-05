import styled from '@emotion/styled';
import { Codepen, ExternalLink, GitHub } from 'react-feather';
import { IExperiments } from '../content/experiments';
import {
  StyledExperimentItemContainer,
  Tilter,
} from './styles/experiments.styles';

type Props = {
  experiment: IExperiments;
};

const ExperimentItem = ({ experiment }: Props) => {
  let icon;

  switch (experiment.location) {
    case 'codepen':
      icon = <CodepenIcon role="img" />;
      break;
    case 'github':
      icon = <GithubIcon role="img" />;
      break;
    case 'medium':
    default:
      icon = <ExternalLinkIcon role="img" />;
  }

  return (
    <Tilter scale={1} transitionSpeed={200}>
      <StyledExperimentItemContainer
        className="experiments-container"
        href={experiment.link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="experiment-meta">
          <time className="experiment-date">{experiment.date}</time>
          <span>{icon}</span>
        </div>
        <h3 className="experiment-item-heading">{experiment.title}</h3>
        <p>{experiment.description}</p>
        <ul>
          {experiment.tags.map((tag) => (
            <li key={`tag-${tag}`}>{tag}</li>
          ))}
        </ul>
      </StyledExperimentItemContainer>
    </Tilter>
  );
};

const GithubIcon = styled(GitHub)`
  height: 0.8em;
  width: 0.8em;
  color: #777;
`;

const CodepenIcon = styled(Codepen)`
  height: 0.8em;
  width: 0.8em;
  color: #777;
`;
const ExternalLinkIcon = styled(ExternalLink)`
  height: 0.8em;
  width: 0.8em;
  color: #777;
`;

export default ExperimentItem;
