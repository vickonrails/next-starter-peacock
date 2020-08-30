import React from "react";
import { Layout, Container, Cards } from "../components";
import { useRouter } from "next/router";
import { getContentList } from "../lib/content";

/**
 * Blog page `/blog`
 */
const Notes = ({ notes }) => {
  const { pathname } = useRouter();
  return (
    <Layout
      pageTitle="Notes"
      pathname={pathname}
      pageDescription="Quick and Scrappy learning notes and documentation. Things I'm learning about ReactJS, Product Design, React Native and NodeJS"
    >
      <Container>
        <Cards data={notes} basePath="notes" />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const notes = getContentList("notes");
  return {
    props: { notes },
  };
};

export default Notes;
