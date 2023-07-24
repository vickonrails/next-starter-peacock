import styled from '@emotion/styled';
// import BackgroundImage from "./images/background-pattern.jpg";

export const StyledIndex = styled.div`
  .page-intro {
  }
`;
export const StyledDesignPlus = styled.section`
  background: #fff url("/images/background-pattern.jpg");
  padding: 40px 0;

  p:nth-child(2) {
    margin-bottom: none;
  }

  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .container .text,
  .container .image {
    flex: 1 100%;
  }

  img {
    object-fit: cover;
  }

  h2 {
    font-size: 1.75em;
    color: #000;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
      font-size: 2.75em;
    }
  }

  p {
    color: #000;
  }

  @media (min-width: 759px) {
    .container .text,
    .container .image {
      flex: 1;
    }
    .text {
      margin-right: 5%;
    }
  }
`;
