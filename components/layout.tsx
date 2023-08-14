'use client'
import React, { createContext, useState } from 'react'
import Nav from './nav/nav'
import Footer from './footer'
import MobileNav from './nav/mobile-nav'

interface MenuContextProps {
    menuOpen: boolean,
    toggleMenuOpen: () => void
}

export const MenuContext = createContext<MenuContextProps>({
    menuOpen: false,
    toggleMenuOpen: () => {/** */ },
});

export function Layout({ children }: { children: React.ReactNode }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenuOpen = () => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true);
    };

    return (
        <MenuContext.Provider value={{ toggleMenuOpen, menuOpen }}>
            <Nav />
            {menuOpen ? <MobileNav /> : (
                <>
                    {children}
                    <Footer />
                </>
            )}
        </MenuContext.Provider>
    )
}