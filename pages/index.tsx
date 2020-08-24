import React, { FC } from "react";
import { useRouter } from "next/router";

import { Layout } from "../components";
import Container from "../components/container";
import { StyledIndexPage } from "../components/styles/home.styles";

const Index: FC = () => {
  const { pathname } = useRouter();
  return (
    <Layout pathname={pathname}>
      <StyledIndexPage>
        <Container>Welcome to Next Starter Peacock</Container>
      </StyledIndexPage>
    </Layout>
  );
};

export default Index;
