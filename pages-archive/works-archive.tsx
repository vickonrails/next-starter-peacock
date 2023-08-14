import React from 'react';
import { Layout, Container, Cards } from '../components';
import { getContentList } from '../lib/content';

/**
 * Work page `/work`
 */
export default function Work({ works }) {
  return (
    <Layout
      pathname={'/works'}
      pageTitle="Works &amp; Projects"
      pageDescription="Works and projects spanning Product design, Research, frontend and software engineering with ReactJS, React Native and NodeJs"
    >
      <Container>
        <p className="page-intro">
          Selected works I&apos;m proud of. Ranging from Software Engineering and
          Product Design.
        </p>
        <Cards data={works} basePath="works" />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const works = getContentList('works');
  return {
    props: { works },
  };
};
