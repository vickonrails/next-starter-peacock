import { Container, Socials } from '@components';
import { Codepen, GitHub, Linkedin, Twitter } from 'react-feather';

export function Footer() {
  return (
    <footer className="py-10">
      <Container className="flex justify-between">
        <p>&copy; Victor Ofoegbu</p>

        <Socials />
      </Container>
    </footer>
  );
}

export default Footer;
