import styled from '@emotion/styled';
import { getWidth } from '../../util/getWidth';
import { IContainer } from '../container';

export const StyledContainer = styled.section<IContainer>`
  padding: 0 4%;
  max-width: ${({ width }) => (width && getWidth(width)) || 'none'};
  margin: 0 auto;
`;
