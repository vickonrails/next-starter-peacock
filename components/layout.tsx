import React, {
  useState,
  createContext,
  ReactChildren,
  ReactNode,
} from "react";

import { StyledMain } from "./styles/layout.styles";
import Header from "./header/header";
import Footer from "./footer";
import Nav from "./nav";
import MobileNav from "./nav/mobile-nav";

interface ILayout {
  children: ReactNode;
  pathname: string;
  pageTitle: string;
}

//@ts-ignore
export const MenuContext = createContext({
  menuOpen: null,
  toggleMenuOpen: null,
});

const Layout = ({ children, pathname, pageTitle }: ILayout) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
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
