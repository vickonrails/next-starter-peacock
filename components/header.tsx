
import Image from 'next/image';
import siteConfig from '../config/index.json';
import { Container, NativeLink, Socials } from '@components';
import Abstract from '../public/images/abstract.png';

export function Header() {
  return (
    <Container className="flex py-16 gap-5">
      <div className="flex-1 mt-20">
        <div className="mb-5">
          <h1 className="text-foreground text-4xl font-bold mb-4 md:max-w-[80%] font-display">
            {siteConfig.author.title}
          </h1>
          <p className="mb-4 text-lg text-accent-4">
            I have 5 years experience as a software engineer, building tools and products that help people achieve more.
          </p>

          <p className="text-lg text-accent-4">
            I have previously worked for companies like <NativeLink target="_blank" rel="noreferrer noopener" href="https://staffbase.com">Staffbase</NativeLink>, <NativeLink target="_blank" rel="noreferrer noopener" href="https://www.contentful.com">Contentful</NativeLink>, etc. Right now I am available for <b>senior frontend-focused positions</b> to build tools. I bring a ton of experience building design systems, also for accessibility and performance.
          </p>
        </div>
        <Socials />
      </div>

      <div className="hidden md:flex md:justify-end flex-1">
        <div>
          <Image height={500} width={430} alt="" src={Abstract} />
          <p className="text-center text-sm text-accent-5">Photo by <a href="https://unsplash.com/@danesduet?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Daniel Olah</a>, replace with yours.</p>
        </div>
      </div>
    </Container >
  )
};

