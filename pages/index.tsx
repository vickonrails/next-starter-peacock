import React, { FC } from "react";
import { useRouter } from "next/router";

import { Layout } from "../components";
import Container from "../components/container";

const Index: FC = () => {
  const { pathname } = useRouter();
  return (
    <Layout pathname={pathname}>
      <Container>Welcome to Next Starter Peacock</Container>
    </Layout>
  );
};

export default Index;
