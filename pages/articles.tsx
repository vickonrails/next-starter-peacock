import React from "react";
import { Layout, Container, Cards } from "../components";
import { useRouter } from "next/router";
import { getContentList } from "../lib/content";

/**
 * Article page `/articles`
 */

const Articles = ({ blogs }) => {
  const { pathname } = useRouter();
  return (
    <Layout pathname={pathname} pageTitle="Articles">
      <Container>
        <blockquote>
          Site is a work in progress. So dummy content all the way!
        </blockquote>
        <Cards data={blogs} />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const blogs = getContentList();
  return {
    props: { blogs },
  };
};

export default Articles;
