import React from "react";
import { Layout, Container } from "../components";
import { useRouter } from "next/router";

const Articles = () => {
  const { pathname } = useRouter();
  return (
    <Layout pathname={pathname}>
      <Container>
        <blockquote>
          Site is a work in progress. So dummy content all the way!
        </blockquote>
        {/* <Articles /> */}
      </Container>
    </Layout>
  );
};

export default Articles;
