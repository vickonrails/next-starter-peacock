import styled from '@emotion/styled';
import { IContainer } from '../container';
import { getWidth } from '../../util/getWidth';

export const StyledContainer = styled.section<IContainer>`
  padding: 0 4%;
  max-width: ${({ width }) => getWidth(width)};
  margin: 0 auto;
`;
