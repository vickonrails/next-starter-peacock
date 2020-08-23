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

interface ILayout {
  children: ReactNode;
  pathname: string;
}

//@ts-ignore
export const MenuContext = createContext();

const Layout = ({ children, pathname }: ILayout) => {
  //   const [menuOpen, setMenuOpen] = useState(false);

  //   const closeModal = (e) => {
  //     menuOpen && setMenuOpen(false);
  //   };
  return (
    // <MenuContext.Provider
    //   value={{ menuOpen: menuOpen, setMenuOpen: setMenuOpen }}
    // >
    //   <div onClick={closeModal}>
    //     <Nav name={name} />
    //     <Header
    //       location={location}
    //       articleTitle={articleTitle}
    //       tags={tags}
    //       date={date}
    //       articleImage={articleImage}
    //     />
    <>
      <Nav />
      <Header pathname={pathname} />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
    //{" "}
    //   </div>
    //{" "}
    // </MenuContext.Provider>
  );
};

export { Layout };
