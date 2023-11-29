'use client'

import { createContext } from 'react';

interface MenuContextProps {
    menuOpen: boolean,
    toggleMenuOpen: () => void
}

export const MenuContext = createContext<MenuContextProps>({
    menuOpen: false,
    toggleMenuOpen: () => {/** */ },
});

export const MenuProvider = MenuContext.Provider;