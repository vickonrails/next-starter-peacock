import React from "react";
import Link from "next/link";

import { StyledMobileNav } from "../styles/nav.styles";

const MobileNav = () => {
  return (
    <StyledMobileNav>
      <div className="mobile-nav-container">
        <ul className="linkList">
          <li className="listItem">
            <Link href="/" className="link">
              Home
            </Link>
          </li>

          <li className="listItem">
            <Link href="/works" className="link">
              Works
            </Link>
          </li>

          <li className="listItem">
            <Link href="/articles" className="link">
              Articles
            </Link>
          </li>

          <li className="listItem">
            <Link href="/notes" className="link">
              Notes
            </Link>
          </li>

          <li className="listItem">
            <Link href="/about" className="link">
              About
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
