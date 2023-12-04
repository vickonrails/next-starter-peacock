
import Image from 'next/image';
import siteConfig from '../config/index.json';
import { Container } from '@components';
import Avatar from '../public/images/avatar.jpg';

export function Header() {
  return (
    <Container className="flex items-center py-20 lg:py-32">
      <div className="flex-1 flex" >
        <div className="mx-auto">
          <h1 className="text-foreground text-3xl font-bold mb-4">
            Seasoned Software & Product Engineer...
          </h1>
          <p className="mb-4 text-lg text-accent-4">
            I have 5 years experience as a software engineer, building tools and products that help people achieve more.
          </p>

          <p className="text-lg text-accent-4">
            I have previously worked for companies like Staffbase, Contentful, etc. Right now I am available for senior frontend-focused positions to build tools. I bring a ton of experience building design systems, also for accessibility and performance.
          </p>
        </div>
      </div >

      <div className="hidden md:flex flex-1">
        <Image height={400} width={400} alt="" src={Avatar} className="max-w-[400px] mx-auto" />
      </div>
    </Container >
  )
};

