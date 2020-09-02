import React from "react";
import Link from "next/link";

import { StyledMobileNav } from "../styles/nav.styles";

const MobileNav = () => {
  return (
    <StyledMobileNav>
      <div className="mobile-nav-container">
        <ul className="linkList">
          <li className="listItem">
            <Link href="/">
              <a className="link">Home</a>
            </Link>
          </li>

          <li className="listItem">
            <Link href="/works">
              <a className="link">Works</a>
            </Link>
          </li>

          <li className="listItem">
            <Link href="/articles">
              <a className="link">Articles</a>
            </Link>
          </li>

          <li className="listItem">
            <Link href="/notes">
              <a className="link">Notes</a>
            </Link>
          </li>

          <li className="listItem">
            <Link href="/about">
              <a className="link">About</a>
            </Link>
          </li>

          <li className="listItem">
            <a
              href="https://github.com/vickOnRails/next-starter-peacock"
              target="_blank"
              rel="noopener norefferer"
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
