'use client'

import { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark'

interface ThemeContextProps {
    theme: Theme,
    toggleTheme: () => void
    setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: 'dark',
    toggleTheme: () => {/** */ },
    setTheme: () => {/** */ }
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark')

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
    }

    useEffect(() => {
        // toggle dark class on the body
        if (theme === 'dark') {
            document.body.classList.remove('dark')
        } else {
            document.body.classList.add('dark')
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};

export function useTheme() {
    return useContext(ThemeContext)
}