import React, { FC } from 'react';
import { Cards, Container, Layout } from '../components';
import DesignCode from '../components/design-code';
import ExperimentsSection from '../components/experiments';
import { StyledIndexPage } from '../components/styles/home.styles';
import { getContentList } from '../lib/content';

/**
 * Index page `/index`
 */

// @ts-ignore
const Index: FC = ({ selectedWorks }) => {
  return (
    <Layout pathname="/" pageTitle="Next.js Starter Peacock">
      <StyledIndexPage>
        <Container>
          <Cards data={selectedWorks} basePath="works" />
        </Container>
        <DesignCode />
        <ExperimentsSection />
      </StyledIndexPage>
    </Layout>
  );
};

export const getStaticProps = async () => {
  type Work = {
    [key: string]: any;
    date?: Date | undefined;
    previewImage: any;
    id: string;
  };

  const works: Work[] = await getContentList('work');
  const selectedWorks = works.filter((work) => work.selectedWork);

  return {
    props: {
      selectedWorks,
    },
  };
};

export default Index;
