import styled from "@emotion/styled";

export const StyledNoteLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const StyledNote = styled.article`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  /* align-items: center; */
  margin-bottom: 2em;

  .icon {
    color: #808080;
  }

  .date-icon svg {
    margin-right: 0.5em;
    font-size: 0.5em;
    width: 15px;
    height: 15px;
  }

  time {
    display: flex;
    width: 200px;
    font-size: 0.9em;
  }

  p {
    margin: 0;
    color: #808080;
  }

  h2 {
    font-size: 1.35rem;
    margin-bottom: 0.35em;
  }

  @media (min-width: 769px) {
    margin-bottom: 0;
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledNotes = styled.section`
  time {
  }
  h2 {
  }
`;
