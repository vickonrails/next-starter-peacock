import React from "react";
import { Layout, Container, Cards } from "../components";
import { useRouter } from "next/router";

/**
 * Work page `/work`
 */
const Work = () => {
  const { pathname } = useRouter();
  return (
    <Layout pathname={pathname} pageTitle="My Work">
      <Container>
        <Cards
          data={[
            {
              title: "Some other content",
              body: <p>Always something light</p>,
              slug: "/articles/markdown-2",
            },
            {
              title: "Some other content",
              body: <p>Always something light</p>,
              slug: "/articles/markdown-2",
            },
            {
              title: "Some other content",
              body: <p>Always something light</p>,
              slug: "/articles/markdown-2",
            },
          ]}
        />
      </Container>
    </Layout>
  );
};

export default Work;
