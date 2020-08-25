import React from "react";
import { Layout, Container, Cards } from "../components";
import { useRouter } from "next/router";

/**
 * Blog page `/blog`
 */
const Notes = () => {
  const { pathname } = useRouter();
  return (
    <Layout pageTitle="Notes" pathname={pathname}>
      <Container>
        <Cards
          data={[
            {
              title: "Some literally content here",
              body: <p>Alright something</p>,
              slug: "/articles/markdown-2",
            },
            {
              title: "Some literally content here",
              body: <p>Alright something</p>,
              slug: "/articles/markdown-2",
            },
            {
              title: "Some literally content here",
              body: <p>Alright something</p>,
              slug: "/articles/markdown-2",
            },
          ]}
        />
      </Container>
    </Layout>
  );
};

export default Notes;
