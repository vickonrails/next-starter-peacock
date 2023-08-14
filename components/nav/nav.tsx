import React, { HTMLAttributes, createContext, useContext, useState } from 'react';
import Link from 'next/link';

import Logo from '../logo';
import { Container } from '../container';
import SiteConfig from '../../config/index.json';
import clsx from 'clsx';
import { MenuContext } from '../layout';

const Nav = () => {
  return (
    <header className="py-4 mb-20 relative z-10">
      <Container>
        <nav className="navWrapper flex justify-between items-center">
          <div className="navLeft">
            <Link href="/" className="flex items-center text-body-text hover:text-white no-underline">
              <Logo />
              <span>{SiteConfig.author.name}</span>
            </Link>
          </div>

          <div className="relative">
            <Hamburger />

            <ul className="hidden list-none md:flex">
              <li className="mr-2">
                <Link href="/works">
                  Work
                </Link>
              </li>
              <li className="mr-2">
                <Link href="/articles">
                  Articles
                </Link>
              </li>
              <li className="mr-2">
                <Link href="/notes">
                  Notes
                </Link>
              </li>
              <li className="mr-2">
                <Link href="/about">
                  About
                </Link>
              </li>

              <li>
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
    </header>
  );
};

export default Nav;


const Hamburger = (props: HTMLAttributes<HTMLElement>) => {
  const menuContext = useContext(MenuContext);
  const { toggleMenuOpen, menuOpen } = menuContext;

  return (
    <button
      className={
        clsx(`
          h-4 w-8 bg-inherit block p-3 border-white border relative border-none rounded-[50%] transition-all
          cursor-pointer focus:outline-white active:outline-white before:content-[""] before:bg-white
          before:h-[2px] before:w-full before:absolute before:block before:right-0 after:content-[""] after:bg-white
          after:h-[2px] after:w-full after:absolute after:block after:right-0 md:hidden z-20`,
          menuOpen ? 'before:top-[14px] before:rotate-45 after:w-full after:bottom-[11px] after:-rotate-45' : 'before:top-[8px] after:w-[80%] after:bottom-[8px]'
        )}
      onClick={toggleMenuOpen}
      {...props}
    />
  )
}