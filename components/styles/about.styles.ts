import styled from "@emotion/styled";

export const StyledAbout = styled.section`
  img {
    height: 150px;
    width: 150px;
    border-radius: 100%;
    margin-right: 0.8em;
    float: left;
    shape-outside: circle();
  }

  @media (min-width: 759px) {
    img {
      height: 200px;
      width: 200px;
    }
  }
`;
