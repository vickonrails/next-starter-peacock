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
      pageDescription="Articles and Essays about Frontend Web Development and software engineering"
    >
      <Container>
        <p className="page-intro">
          More long form articles and essays about new things I'm exploring and
          learning about...
        </p>

        <blockquote>
          All articles here are for demo purposes. But hey, the sky is the limit
          🚀
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
