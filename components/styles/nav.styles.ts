import styled from "@emotion/styled";

export const NavSection = styled.header`
  padding-top: 1em;
  padding-bottom: 1em;
  margin-bottom: 5em;

  .no-underline {
    color: var(--text-color-dark);

    &:hover {
      color: #fff;
    }
  }

  .navWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navRight {
    position: relative;
  }

  .navHomeLink {
    display: inline-flex;
    align-items: center;
    text-decoration: none;

    &:hover {
    }
  }

  .navLinkList {
    display: none;
    list-style: none;
  }

  .navLinkItem {
    margin-right: 0.5em;

    &:last-child {
      margin-right: 0;
    }
  }

  .navLink {
    text-decoration: none;

    &:hover {
    }
  }

  @media (min-width: 759px) {
    margin-bottom: 5em;
  }
`;
