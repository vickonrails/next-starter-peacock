import { Codepen, GitHub, Twitter } from 'react-feather';
import { Container } from '@components';

export function Footer() {
  return (
    <footer>
      <Container className="flex justify-center items-center">
        <ul className="flex m-auto mb-4">
          <li className="block mr-2">
            <a
              className="footerLink"
              href="https://github.com/vickOnRails"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="github"
            >
              <GitHub />
            </a>
          </li>

          <li>
            <a
              className="block mr-2"
              href="https://codepen.io/Vick_onrails"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="codepen"
            >
              <Codepen />
            </a>
          </li>

          <li>
            <a
              className="block mr-2"
              href="https://twitter.com/vick_onrails"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="twitter"
            >
              <Twitter />
            </a>
          </li>
        </ul>
      </Container>

      <Container>
        <p className="text-center max-w-xs mx-auto text-sm">
          Built by{' '}
          <a
            href="https://twitter.com/vick_OnRails"
            target="_blank"
            rel="noreferrer noopener"
          >
            @vick_onrails
          </a>
          . With NextJS, TypeScript, TailwindCSS and Vercel.{' '}
          <a
            href="https://github.com/vickOnRails/next-starter-peacock"
            target="_blank"
            rel="noopener norefferer"
          >
            Source
          </a>
        </p>
      </Container>
    </footer>
  )
};

export default Footer;
