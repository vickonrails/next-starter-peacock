import styled from '@emotion/styled';
import { IContainer } from '../container';

export const StyledChip = styled.div<IContainer>`
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
  }

  li {
    margin-right: 0.5em;
    font-size: 0.8em;
    background: #202020;
    margin-bottom: 0.5em;
    transition:
      transform 0.15s,
      color 0.15s;

    a {
      padding: 0.35em 0.5em;
      display: inline-block;
    }
    a,
    a:hover {
      text-decoration: none;
    }
  }

  li:hover {
    box-shadow: 0 0 3px 2px #3c1516;
  }
`;
