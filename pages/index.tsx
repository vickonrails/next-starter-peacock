import React, { FC } from "react";
import { useRouter } from "next/router";

import { Layout, Container, Cards } from "../components";
import { StyledIndexPage } from "../components/styles/home.styles";

const Index: FC = () => {
  const { pathname } = useRouter();
  return (
    <Layout pathname={pathname}>
      <StyledIndexPage>
        <Container>
          Articles Page
          <Cards />
        </Container>
      </StyledIndexPage>
    </Layout>
  );
};

export default Index;
