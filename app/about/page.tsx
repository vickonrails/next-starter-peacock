
import { Container } from '@components';
import SiteConfig from '../../config/index.json';

export const metadata = {
  title: `About Me | ${SiteConfig.site.siteName}`,
  description: SiteConfig.site.siteDescription
}

/**
 * About page `/about`
 */

export default function About() {
  return (
    <Container width="narrow">
      {/* Content goes here */}
      <header className="pt-12 pb-4">
        <h1 className="text-3xl font-bold mb-6 md:text-4xl font-display">About Me 🧘🏾‍♂️</h1>
      </header>
      <div className="flex text-accent-4">
        <div>
          <p className="mb-4">
            Victor is a dynamic and innovative software engineer with over six years of experience in the tech industry. Specializing in full-stack development, Victor combines a deep understanding of backend technologies with a passion for front-end design, creating seamless and efficient user experiences. His journey in the tech world began with a Bachelor&apos;s degree in Computer Science, followed by a rapid ascent through various roles, from junior developer to a lead engineer.
          </p>
          <p>
            Victor&apos;s expertise lies in leveraging the latest technologies to build scalable, responsive web applications and cloud-based solutions. His skill set encompasses a wide range of technologies including JavaScript (React.js, Node.js), Python, and cloud platforms like AWS and Azure.
          </p>
        </div>
      </div>
    </Container>
  );
};

