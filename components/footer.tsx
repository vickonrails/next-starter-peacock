import { Codepen, GitHub, Twitter, Linkedin } from 'react-feather';
import { Container, Socials } from '@components';

export function Footer() {
  return (
    <footer className="py-10">
      <Container className="flex justify-between">
        <p>&copy; Victor Ofoegbu</p>

        <Socials />
      </Container>
    </footer>
  )
};

export default Footer;
