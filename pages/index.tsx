import React, { FC } from "react";
import { useRouter } from "next/router";

import { Layout, Container, Cards } from "../components";
import { StyledIndexPage } from "../components/styles/home.styles";

/**
 * Index page `/index`
 */

const Index: FC = () => {
  const { pathname } = useRouter();
  return (
    <Layout pathname={pathname} pageTitle="Home page">
      <StyledIndexPage>
        <Container>
          <Cards
            data={[
              {
                title: "Some Title",
                body: <p>One More Thing</p>,
                slug: "/articles/markdown-2",
              },
            ]}
          />
        </Container>
      </StyledIndexPage>
    </Layout>
  );
};

export default Index;
