import Head from 'next/head';
import React, { createContext, ReactNode, useState } from 'react';
import SiteConfig from '../config/index.json';
import Footer from './footer';
import Header from './header/header';
import Nav from './nav';
import MobileNav from './nav/mobile-nav';
import { StyledMain } from './styles/layout.styles';

interface ILayout {
  children: ReactNode;
  pathname: string;
  pageTitle: string;
  pageDescription?: string;
}

type Menu = {
  menuOpen: boolean | null;
  toggleMenuOpen: (() => void) | null;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const MenuContext = createContext<Menu>({
  menuOpen: null,
  toggleMenuOpen: null,
});

const Layout = ({
  children,
  pathname,
  pageTitle,
  pageDescription,
}: ILayout) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
      <Head>
        <title>{`${pageTitle} | ${SiteConfig.site.siteTitle}`}</title>
        <meta
          name="keywords"
          content={SiteConfig.site.keywords}
          key="keywords"
        />
        <meta
          name="description"
          key="description"
          content={pageDescription || SiteConfig.site.siteDescription}
        />

        {/* og tags */}
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta
          property="og:description"
          content={pageDescription || SiteConfig.site.siteDescription}
          key="ogdesc"
        />
        <meta property="og:url" content={SiteConfig.site.siteUrl} key="ogurl" />
        <meta
          property="og:image"
          content={SiteConfig.site.siteImage}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content={SiteConfig.site.siteName}
          key="ogsitename"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta
          name="twitter:creator"
          content={SiteConfig.author.twitterHandle}
          key="twhandle"
        />

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Nav />
      {menuOpen ? (
        <MobileNav />
      ) : (
        <>
          <Header pathname={pathname} title={pageTitle} />
          <StyledMain>{children}</StyledMain>
          <Footer />
        </>
      )}
    </MenuContext.Provider>
  );
};

export { Layout };