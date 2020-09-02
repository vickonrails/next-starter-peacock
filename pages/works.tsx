import React from "react";
import { Layout, Container, Cards } from "../components";
import { useRouter } from "next/router";
import { getContentList } from "../lib/content";

/**
 * Work page `/work`
 */
const Work = ({ works }) => {
  const { pathname } = useRouter();
  return (
    <Layout
      pathname={pathname}
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
  const works = getContentList("work");
  return {
    props: { works },
  };
};

export default Work;
