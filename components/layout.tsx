import React, { useState, createContext, ReactNode } from "react";
import Head from "next/head";
import SiteConfig from "../config/index.json";

import { StyledMain } from "./styles/layout.styles";
import Header from "./header/header";
import Footer from "./footer";
import Nav from "./nav";
import MobileNav from "./nav/mobile-nav";

interface ILayout {
  children: ReactNode;
  pathname: string;
  pageTitle: string;
  pageDescription?: string;
}

//@ts-ignore
export const MenuContext = createContext({
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
        <meta name="keywords" content={SiteConfig.site.keywords} />
        <meta
          name="description"
          content={pageDescription || SiteConfig.site.siteDescription}
        />
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
