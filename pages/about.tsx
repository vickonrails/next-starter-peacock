import React from "react";
import { useRouter } from "next/router";

import { Layout } from "../components";
import Container from "../components/container";

const About = () => {
  const { pathname } = useRouter();
  return (
    <Layout pathname={pathname}>
      <Container>About Page</Container>
    </Layout>
  );
};

export default About;
