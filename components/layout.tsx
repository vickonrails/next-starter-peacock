'use client'
import React, { useState } from 'react'
import { Footer, MobileNav, Nav } from '@components'
import { MenuProvider } from './MenuContext';

export function Layout({ children }: { children: React.ReactNode }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenuOpen = () => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true);
    };

    return (
        <MenuProvider value={{ toggleMenuOpen, menuOpen }}>
            <Nav />
            {menuOpen ? <MobileNav /> : (
                <>
                    {children}
                    <Footer />
                </>
            )}
        </MenuProvider>
    )
}