import React, { FC } from "react";
import { useRouter } from "next/router";

import { Layout, Container, Cards } from "../components";
import { StyledIndexPage } from "../components/styles/home.styles";
import { getContentList } from "../lib/content";
import DesignCode from "../components/design-code";
import ExperimentsSection from "../components/experiments";
import Link from "next/link";

/**
 * Index page `/index`
 */

//@ts-ignore
const Index: FC = ({ selectedWorks }) => {
  const { pathname } = useRouter();
  return (
    <Layout pathname={pathname} pageTitle="Nextjs Starter Peacock">
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
  const works = await getContentList("work");
  const selectedWorks = works.filter((work) => work.selectedWork);

  return {
    props: {
      selectedWorks,
    },
  };
};

export default Index;
