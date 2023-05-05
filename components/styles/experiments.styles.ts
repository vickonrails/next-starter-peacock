import styled from '@emotion/styled';
import Tilt from 'react-parallax-tilt';

export const Tilter = styled(Tilt)`
  padding: 40px 0;
  background: #202020;
  margin-bottom: 0.75em;
  border-radius: 4px;
  padding: 0.75em;
  cursor: pointer;

  @media all and (min-width: 540px) {
    margin: 0 0.5em 1em;
    flex: 1 1 40%;
  }

  @media all and (min-width: 1024px) {
    flex: 1 30%;
  }
`;

export const StyledExperimentsSection = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;

  h2 {
    font-size: 1.75em;
    margin-bottom: 1rem;
  }

  /* .section-intro {
    font-size: 1.5em;
  } */

  .section {
    display: flex;
    flex-wrap: wrap;
  }

  /* p {
    padding: 40px 0;
  } */

  .experiments {
    display: flex;
    flex-wrap: wrap;
  }

  .experiment-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media all and (min-width: 1020px) {
    h2 {
      font-size: 2.75em;
    }
  }
`;

export const StyledExperimentItemContainer = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  time {
    font-size: 0.75em;
    color: #808080;
  }

  h3 {
    margin-bottom: 0.5em;
    font-size: 1em;
  }

  /* p {
    font-size: 0.875em;
    margin-bottom: 1em;
  } */

  ul {
    list-style-type: none;
  }

  li {
    display: inline-block;
    border: 1px solid #bf360c;
    padding: 0.2em 0.75em;
    color: #bf360c;
    font-size: 0.75em;
    margin-right: 0.5em;
  }
`;
