import Link from 'next/link';
import React from 'react';
import { StyledMobileNav } from '../styles/nav.styles';

const MobileNav = () => {
  return (
    <StyledMobileNav>
      <div className="mobile-nav-container">
        <ul className="linkList">
          <li className="listItem">
            <Link className="no-underline" href="/">
              Home
            </Link>
          </li>

          <li className="listItem">
            <Link className="no-underline" href="/works">
              Works
            </Link>
          </li>

          <li className="listItem">
            <Link className="no-underline" href="/articles">
              Articles
            </Link>
          </li>

          <li className="listItem">
            <Link className="no-underline" href="/notes">
              Notes
            </Link>
          </li>

          <li className="listItem">
            <Link className="no-underline" href="/about">
              About
            </Link>
          </li>

          <li className="listItem">
            <a
              href="https://github.com/vickOnRails/next-starter-peacock"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </li>
        </ul>
      </div>
    </StyledMobileNav>
  );
};

export default MobileNav;
