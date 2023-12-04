import { Codepen, GitHub, Twitter, Linkedin } from 'react-feather';
import { Container } from '@components';

export function Footer() {
  return (
    <footer className="py-10">
      <Container className="flex justify-between">
        <p>&copy; Victor Ofoegbu</p>

        <ul className="flex gap-4 mb-4 justify-center">
          <li className="block">
            <a
              className="footerLink"
              href="https://github.com/vickOnRails"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="github"
            >
              <GitHub size={18} />
            </a>
          </li>

          <li>
            <a
              className="block"
              href="https://linkedin.com/in/victor-ofoegbu"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="linkedin"
            >
              <Linkedin size={18} />
            </a>
          </li>

          <li>
            <a
              className="block"
              href="https://twitter.com/vick_onrails"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="twitter"
            >
              <Twitter size={18} />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  )
};

export default Footer;
