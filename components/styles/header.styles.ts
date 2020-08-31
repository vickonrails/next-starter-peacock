import styled from "@emotion/styled";

export const StyledHomeHeading = styled.div`
  @media (min-width: 1024px) {
    .header-container {
      max-width: 70%;
    }
    .description {
      font-size: 1.2em;
    }
  }

  @media (min-width: 1336px) {
    .header-container {
      max-width: 80%;
    }
  }
`;

export const StyledPageHeading = styled.div`
  text-align: center;

  &.page h1 {
    max-width: 80%;
    text-align: center;
    margin: 0 auto 1rem;
  }

  .about-header {
    font-size: 1.75em;
    text-align: center;
    margin: 1.5em 0;
  }

  /* @media screen and (min-width: 560px) {
    font-size: 2.5em;
  } */

  @media (max-width: 769px) {
    &.page h1 {
      font-size: 2.2em;
    }
  }
`;
