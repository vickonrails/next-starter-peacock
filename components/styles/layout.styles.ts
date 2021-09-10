import styled from '@emotion/styled';

export const StyledMain = styled.main`
  /* min-height: calc(100vh - 300px); */
`;

export const PostContent = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;

  ul,
  ol {
    padding-left: 1em;
    margin-bottom: 1em;
  }

  img {
    margin-bottom: 1em;
    display: block;
  }
  ul ul,
  ol ol {
    margin-bottom: 0;
  }
  li {
    margin-bottom: 1em;
  }
`;
