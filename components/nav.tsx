import Link from 'next/link';
import React, { useContext } from 'react';
import SiteConfig from '../config/index.json';
import { MenuContext } from './';
import { Container } from './container';
import Logo from './logo';
import { NavSection, StyledHamburger } from './styles/nav.styles';

const Nav = () => {
  const menuContext = useContext(MenuContext);

  const { toggleMenuOpen, menuOpen } = menuContext;

  return (
    <NavSection>
      <Container>
        <nav className="navWrapper">
          <div className="navLeft">
            <Link href="/">
              <a className="no-underline">
                <Logo />
                <span>{SiteConfig.author.name}</span>
              </a>
            </Link>
          </div>

          <div className="navRight">
            {menuOpen && toggleMenuOpen && (
              <StyledHamburger menuOpen={menuOpen} onClick={toggleMenuOpen} />
            )}

            <ul className="navLinkList">
              <li data-cy="workPageLink" className="navLinkItem">
                <Link href="/works">
                  <a>Work</a>
                </Link>
              </li>
              <li data-cy="articlesPageLink" className="navLinkItem">
                <Link href="/articles">
                  <a>Articles</a>
                </Link>
              </li>
              <li data-cy="notesPageLink" className="navLinkItem">
                <Link href="/notes">
                  <a>Notes</a>
                </Link>
              </li>
              <li data-cy="aboutPageLink" className="navLinkItem">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>

              <li data-cy="rssPageLink" className="navLinkItem">
                <a
                  href={`${SiteConfig.site.siteUrl}/rss.xml`}
                  target="_blank"
                  rel="noopener noreferrer"
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
