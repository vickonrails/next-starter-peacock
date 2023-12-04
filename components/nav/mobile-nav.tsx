import Link from 'next/link';
import { Moon, Sun } from 'react-feather';
import { useTheme } from '../ThemeContext';

export function MobileNav() {
  const { theme, toggleTheme } = useTheme()
  return (
    <section className="absolute inset-0 animate-slide-in">
      <div className="flex items-center justify-center min-h-full">
        <ul className="list-none">
          <li className="text-center mb-4">
            <Link href="/" className="text-center mb-4">
              Home
            </Link>
          </li>

          <li className="text-center mb-4">
            <Link href="/works" className="text-lg">
              Works
            </Link>
          </li>

          <li className="text-center mb-4">
            <Link href="/articles" className="text-lg">
              Articles
            </Link>
          </li>

          <li className="text-center mb-4">
            <Link href="/notes" className="text-lg">
              Notes
            </Link>
          </li>

          <li className="text-center mb-4">
            <Link href="/about" className="text-lg">
              About
            </Link>
          </li>

          <li className="text-center mb-4">
            <a
              href="https://github.com/vickOnRails/next-starter-peacock"
              target="_blank"
              rel="noopener norefferer"
            >
              Source
            </a>
          </li>

          <li>
            <button className="p-4 border-l border-outline" onClick={toggleTheme}>
              {theme === 'dark' ? <Moon className="text-foreground" /> : <Sun className="text-foreground" />}
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};
