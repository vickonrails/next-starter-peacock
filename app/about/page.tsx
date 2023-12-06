import Image from 'next/image';

import { Container } from '@components';
import SiteConfig from '../../config/index.json';
import Avatar from '../../public/images/me-orig.jpg';

export const metadata = {
  title: SiteConfig.site.siteName,
  description: SiteConfig.site.siteDescription
}

/**
 * About page `/about`
 */
export default function About() {
  return (
    <Container width="narrow">
      <header className="pt-12 pb-4">
        <h1 className="text-3xl font-bold mb-6 md:text-4xl font-display">About Me 🧘🏾‍♂️</h1>
      </header>
      <div className="flex">
        <div>
          <p className="pb-4">
            I&apos;m{' '}
            <a
              href="https://twitter.com/vick_OnRails"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Victor
            </a>
            , a Designer and Frontend Engineer learning to build fast and
            delightful experiences on the web. I&apos;m also passionate about Web
            Standards, Design Systems and Learning in Public. Aside from my day job, I work on a few side projects to help
            designers and engineers build with speed.
          </p>
          <p>
            I work heavily with ReactJs, Redux, Styled Components, Figma,
            Storybook & recently picked up C#/Dotnet Core for backend APIs. If
            you&apos;re excited about any of the following, please shoot at me on{' '}
            <a
              href="https://twitter.com/vick_OnRails"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{' '}
            and let&apos;s be friends 😊.
          </p>
        </div>
      </div>
    </Container>
  );
};

