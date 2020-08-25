import React from "react";
import { useRouter } from "next/router";

import { Layout } from "../../components";
import { getAllContentIds, getContentData } from "../../lib/content";

/**
 *  Renders articles markdown posts
 */

const Article = ({ notesData }) => {
  const { pathname } = useRouter();
  const { title } = notesData;

  return (
    <Layout pathname={pathname} pageTitle={title}>
      {notesData.title}
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllContentIds("articles");
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const notesData = getContentData(params.id, "articles");
  return {
    props: {
      notesData,
    },
  };
};

export default Article;
