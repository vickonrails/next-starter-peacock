import React from "react";
import { useRouter } from "next/router";
import Image from 'next/image'

import { Layout, Container } from "../components";
import { StyledAbout } from "../components/styles/about.styles";

/**
 * About page `/about`
 */
const About = () => {
  const { pathname } = useRouter();
  return (
    <Layout
      pathname={pathname}
      pageTitle="About"
      pageDescription="About page of Peacock starter by Victor Ofoegbu, Product Designer and Frontend Software Engineer in Nigeria"
    >
      <StyledAbout>
        <Container width="narrow">
          <div className="postContent">
            <div className="avatarImage">
              <Image src="/images/avatar.jpg" width={200} height={200} alt="Victor Ofoegbu" />
            </div>
            <p>
              I'm{" "}
              <a
                href="https://twitter.com/vick_OnRails"
                target="_blank"
                rel="noopenner noreferrer"
              >
                @Victor
              </a>
              , a Designer and Frontend Engineer learning to build fast and
              delightful experiences on the web. I'm also passionate about Web
              Standards, Design Systems and Learning in Public.
            </p>
            <p>
              Aside from my day job, I work on a few side projects to help
              designers and engineers build with speed
            </p>

            <p>
              I work heavily with ReactJs, Redux, Styled Components, Figma,
              Storybook & recently picked up C#/Dotnet Core for backend APIs. If
              you're excited about any of the following, please shoot at me on{" "}
              <a
                href="https://twitter.com/vick_OnRails"
                target="_blank"
                rel="noopenner noreferrer"
              >
                Twitter
              </a>{" "}
              and let's be friends 😊.
            </p>
          </div>
        </Container>
      </StyledAbout>
    </Layout>
  );
};

export default About;
