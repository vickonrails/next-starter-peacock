import Link from 'next/link';
import React, { useContext } from 'react';
import SiteConfig from '../config/index.json';
import { menuContext } from './';
import { Container } from './container';
import Logo from './logo';
import { NavSection, StyledHamburger } from './styles/nav.styles';

const Nav = () => {
  const menuCtx = useContext(menuContext);

  const { toggleMenuOpen, menuOpen } = menuCtx;

  return (
    <NavSection>
      <Container>
        <nav className="navWrapper">
          <div className="navLeft">
            <Link className="no-underline" href="/">
              <Logo />
              <span>{SiteConfig.author.name}</span>
            </Link>
          </div>

          <div className="navRight">
            {menuOpen && toggleMenuOpen && (
              <StyledHamburger menuOpen={menuOpen} onClick={toggleMenuOpen} />
            )}

            <ul className="navLinkList">
              <li data-test-id="workPageLink" className="navLinkItem">
                <Link href="/works">Work</Link>
              </li>
              <li data-test-id="articlesPageLink" className="navLinkItem">
                <Link href="/articles">Articles</Link>
              </li>
              <li data-test-id="notesPageLink" className="navLinkItem">
                <Link href="/notes">Notes</Link>
              </li>
              <li data-test-id="aboutPageLink" className="navLinkItem">
                <Link href="/about">About</Link>
              </li>

              <li data-test-id="rssPageLink" className="navLinkItem">
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
