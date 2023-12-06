'use client'

import { createContext, useContext } from 'react';

interface MenuContextProps {
    menuOpen: boolean,
    toggleMenuOpen: () => void
}

export const MenuContext = createContext<MenuContextProps>({
    menuOpen: false,
    toggleMenuOpen: () => {/** */ },
});

export function useMenuContext() {
    return useContext(MenuContext);
}

export const MenuProvider = MenuContext.Provider;