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
    <Layout pathname={pathname} pageTitle="Home page">
      <StyledIndexPage>
        <Container>
          <Cards data={selectedWorks} basePath="works" />
        </Container>
        <DesignCode />
        <ExperimentsSection />

        <section>
          <Container>
            <hr />
            <h2 style={{ fontSize: "1.75em" }}>Learning in Public</h2>
            <p className="max-width">
              I forget most of the things I learn. Plus I happen to love writing
              and preserving my exact thoughts for later. I use the{" "}
              <Link href="/notes">
                <a>/notes</a>
              </Link>
              section of my blog to jot down things I'm learning and actively
              thinking about.
            </p>
          </Container>
        </section>
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
