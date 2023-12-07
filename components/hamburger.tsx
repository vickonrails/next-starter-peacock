import { cn } from '@utils/cn';
import { HTMLAttributes, useContext } from 'react';
import { MenuContext } from './MenuContext';

export const Hamburger = (props: HTMLAttributes<HTMLElement>) => {
    const menuContext = useContext(MenuContext);
    const { toggleMenuOpen, menuOpen } = menuContext;

    return (
        <button
            className={
                cn(`
            h-4 w-8 bg-inherit block p-3 border-accent-4 border relative border-none rounded-[50%] transition-all
            cursor-pointer focus:outline-accent-4 active:outline-accent-1 before:content-[""] before:bg-accent-4
            before:h-[2px] before:w-full before:absolute before:block before:right-0 after:content-[""] after:bg-accent-4
            after:h-[2px] after:w-full after:absolute after:block after:right-0 z-20`,
                    menuOpen ? 'before:top-[12px] before:rotate-45 after:w-full after:bottom-[11px] after:-rotate-45' : 'before:top-[8px] after:w-[80%] after:bottom-[8px]'
                )}
            onClick={toggleMenuOpen}
            {...props}
        />
    )
}