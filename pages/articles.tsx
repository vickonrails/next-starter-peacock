import React from "react";
import { Layout, Container, Cards } from "../components";
import { useRouter } from "next/router";
import { getContentList } from "../lib/content";

/**
 * Article page `/articles`
 */

const Articles = ({ articles }) => {
  const { pathname } = useRouter();
  return (
    <Layout
      pathname={pathname}
      pageTitle="Articles"
      pageDescription="Articles and Essays about Frontend Web Development and software engineering by Victor Ofoegbu, Product Designer and Frontend Engineer in Nigeria"
    >
      <Container>
        <blockquote>
          Site is a work in progress. So dummy content all the way!
        </blockquote>
        <Cards data={articles} basePath="articles" />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const articles = getContentList("articles");
  return {
    props: { articles },
  };
};

export default Articles;
