import React from "react";
import {
  StyledFooterSection,
  GitHubIcon,
  CodepenIcon,
  TwitterIcon,
} from "./styles/footer.styles";
import { Container } from "./container";

const Footer = () => (
  <StyledFooterSection>
    <Container className="footer-container">
      <ul className="footerSocialLinks">
        <li className="footerSocialLink">
          <a
            className="footerLink"
            href="https://github.com/vickOnRails"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="github"
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
            aria-label="codepen"
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
            aria-label="twitter"
          >
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </Container>

    <Container>
      <p className="about-site">
        Built by{" "}
        <a
          href="https://twitter.com/vick_OnRails"
          target="_blank"
          rel="noreferrer noopener"
        >
          @vick_onrails
        </a>
        . With NextJS, TypeScript Emotion and Vercel.{" "}
        <a
          href="https://github.com/vickOnRails/next-starter-peacock"
          target="_blank"
          rel="noopener norefferer"
        >
          Source
        </a>
      </p>
    </Container>
  </StyledFooterSection>
);

export default Footer;
