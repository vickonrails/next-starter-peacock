import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { GitHub, Codepen, Twitter } from "react-feather";

export const StyledFooterSection = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1em;

  .footerSocialLinks {
    display: flex;
  }

  .footerSocialLink {
    display: block;
    margin-right: 0.5em;
  }
`;

const IconStyles = css`
  height: 1.2em;
  width: 1.2em;
`;

export const GitHubIcon = styled(GitHub)`
  ${IconStyles}
`;
export const TwitterIcon = styled(Twitter)`
  ${IconStyles}
`;
export const CodepenIcon = styled(Codepen)`
  ${IconStyles}
`;
