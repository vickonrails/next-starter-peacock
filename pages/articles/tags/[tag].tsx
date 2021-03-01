import React from "react";
import { useRouter } from "next/router";
import { getAllContentIds, getContentWithTag } from "../../../lib/content";

import tagsJSON from "../../../config/tags.json";
import { Cards, Container, Layout } from "../../../components";

const category = ({ content, title, description }) => {
  const { pathname } = useRouter();
  return (
    <Layout pathname={pathname} pageTitle={title} pageDescription={description}>
      <Container>
        <p className="page-intro">{description}</p>

        <blockquote>
          All articles here are for demo purposes. But hey, the sky is the limit
          🚀
        </blockquote>
        <Cards data={content} basePath="articles" />
      </Container>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  // Get all the tags from the already defined site tags
  const paths = tagsJSON.map((tag) => {
    return {
      params: {
        tag: tag.tag,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  let content = getContentWithTag(params.tag, "articles");
  const tagObject = tagsJSON.filter((json) => json.tag === params.tag)[0];

  return {
    props: {
      content,
      title: tagObject.title,
      description: tagObject.description,
    },
  };
};

export default category;
