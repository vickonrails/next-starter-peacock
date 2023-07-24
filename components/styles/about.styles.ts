import styled from '@emotion/styled';

export const StyledAbout = styled.section`
  .avatarImage {
    margin-right: 0.8em;
    float: left;
    shape-outside: circle();

    img {
      border-radius: 100%;
      height: 150px;
      width: 150px;
    }
  }

  @media (min-width: 759px) {
    .avatarImage {
      margin-right: 1em;
      img {
        height: 200px;
        width: 200px;
      }
    }
    
  }

  @media (min-width: 1400px) {
    .avatarImage {
      img {
        width: 210px;
      }
    }
  }
`;

