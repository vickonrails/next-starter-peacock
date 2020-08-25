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
    <Layout pageTitle="Notes" pathname={pathname}>
      <Container>
        <Cards data={notes} />
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
