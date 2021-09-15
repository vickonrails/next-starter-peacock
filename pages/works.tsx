import React from 'react';
import { Cards, Container, Layout } from '../components';

/**
 * Work page `/work`
 */

type Props = {
  works: {
    title: string;
    id: string;
    slug: string;
    date: Date;
    previewImage: string;
    description: string;
  }[];
};

const Work = ({ works }: Props) => {
  return (
    <Layout
      pathname="/works"
      pageTitle="Works &amp; Projects"
      pageDescription="Works and projects spanning Product design, Research, frontend and software engineering with ReactJS, React Native and NodeJs"
    >
      <Container>
        <p className="page-intro">
          Selected works I'm proud of. Ranging from Software Engineering and
          Product Design.
        </p>
        <Cards data={works} basePath="works" />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { getContentList } = await import('../lib/content');
  const works = getContentList('work');
  return {
    props: { works },
  };
};

export default Work;
