'use client'

import Link from 'next/link';
import { HTMLAttributes, ReactNode, useContext } from 'react';

import { Logo } from '@components';
import clsx from 'clsx';
import { Moon, Rss, Sun } from 'react-feather';
import SiteConfig from '../../config/index.json';
import { MenuContext } from '../MenuContext';
import { Container } from '../container';
import { useTheme } from 'next-themes';

export function Nav() {
  const rssLink = `${SiteConfig.site.siteUrl}/rss.xml`;
  const { theme, setTheme } = useTheme()
  return (
    <header className="relative z-10 border-b border-accent-8">
      <Container width="bleed">
        <nav className="navWrapper flex justify-between items-center py-3 xl:p-0">
          <Link href="/" className="flex items-center no-underline">
            <Logo />
            <span className="text-base text-foreground">{SiteConfig.author.name}</span>
          </Link>

          {/* TODO: make the links configurable */}
          <div className="relative">
            <div className="flex gap-4">
              <button onClick={() => setTheme('light')}>
                {theme === 'dark' ? <Moon className="text-foreground" /> : <Sun className="text-foreground" />}
              </button>
              <Hamburger />
            </div>

            <nav className="hidden list-none md:flex md:items-center">
              <NavItem title="Works" href="/works" />
              <NavItem title="Articles" href="/articles" />
              <NavItem title="About" href="/about" />

              <NavItem title={<Rss className="text-foreground" />} href={rssLink} external />
              <button className="p-4 border-l border-accent-8" onClick={() => setTheme('dark')}>
                {theme === 'dark' ? <Moon className="text-foreground" /> : <Sun className="text-foreground" />}
              </button>
            </nav>
          </div>
        </nav>
      </Container>
    </header>
  );
};

function NavItem({ title, href, external = false }: { title: string | ReactNode, href: string, external?: boolean }) {
  const classes = 'border-l border-accent-8 text-accent-4 hover:text-accent-1 p-4 uppercase'

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer noopener">
        {title}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {title}
    </Link>
  );

}

const Hamburger = (props: HTMLAttributes<HTMLElement>) => {
  const menuContext = useContext(MenuContext);
  const { toggleMenuOpen, menuOpen } = menuContext;

  return (
    <button
      className={
        clsx(`
          h-4 w-8 bg-inherit block p-3 border-accent-4 border relative border-none rounded-[50%] transition-all
          cursor-pointer focus:outline-accent-4 active:outline-accent-1 before:content-[""] before:bg-accent-4
          before:h-[2px] before:w-full before:absolute before:block before:right-0 after:content-[""] after:bg-accent-4
          after:h-[2px] after:w-full after:absolute after:block after:right-0 md:hidden z-20`,
          menuOpen ? 'before:top-[12px] before:rotate-45 after:w-full after:bottom-[11px] after:-rotate-45' : 'before:top-[8px] after:w-[80%] after:bottom-[8px]'
        )}
      onClick={toggleMenuOpen}
      {...props}
    />
  )
}