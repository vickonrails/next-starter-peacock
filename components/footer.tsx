import React from "react";
import {
  StyledFooterSection,
  GitHubIcon,
  CodepenIcon,
  TwitterIcon,
} from "./styles/footer.styles";
import Container from "./container";

const Footer = () => (
  <StyledFooterSection>
    <Container>
      <ul className="footerSocialLinks">
        <li className="footerSocialLink">
          <a
            className="footerLink"
            href="https://github.com/vickOnRails"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitHubIcon />
          </a>
        </li>

        <li className="footerSocialLink">
          <a
            className="footerLink"
            href="https://codepen.io/Vick_onrails"
            target="_blank"
            rel="noreferrer noopener"
          >
            <CodepenIcon />
          </a>
        </li>

        <li className="footerSocialLink">
          <a
            className="footerLink"
            href="https://twitter.com/vick_onrails"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </Container>
  </StyledFooterSection>
);

export default Footer;
