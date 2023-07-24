import React, { useContext } from 'react';
import Link from 'next/link';

import { NavSection, StyledHamburger } from './styles/nav.styles';
import Logo from './logo';
import { Container } from './container';
import SiteConfig from '../config/index.json';
import { MenuContext } from '.';

const Nav = () => {
  const menuContext = useContext(MenuContext);

  const { toggleMenuOpen, menuOpen } = menuContext;

  return (
    <NavSection>
      <Container>
        <nav className="navWrapper">
          <div className="navLeft">
            <Link href="/" className="no-underline">
              <Logo />
              <span>{SiteConfig.author.name}</span>
            </Link>
          </div>

          <div className="navRight">
            <StyledHamburger
              menuOpen={menuOpen}
              onClick={toggleMenuOpen}
            ></StyledHamburger>

            <ul className="navLinkList">
              <li className="navLinkItem">
                <Link href="/works">
                  Work
                </Link>
              </li>
              <li className="navLinkItem">
                <Link href="/articles">
                  Articles
                </Link>
              </li>
              <li className="navLinkItem">
                <Link href="/notes">
                  Notes
                </Link>
              </li>
              <li className="navLinkItem">
                <Link href="/about">
                  About
                </Link>
              </li>

              <li className="navLinkItem">
                <a
                  href={`${SiteConfig.site.siteUrl}/rss.xml`}
                  target="_blank"
                  rel="noopener norefferer"
                >
                  RSS Feed
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </NavSection>
  );
};

export default Nav;
