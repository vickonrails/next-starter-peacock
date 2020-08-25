import React from "react";
import { useRouter } from "next/router";

import { Layout } from "../../components";
import { getAllContentIds, getContentData } from "../../lib/content";

/**
 *  Renders notes markdown posts
 */

const Note = ({ notesData }) => {
  const { pathname } = useRouter();
  const { title } = notesData;

  return (
    <Layout pathname={pathname} pageTitle={title}>
      {title}
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllContentIds("notes");
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const notesData = await getContentData(params.id, "notes");
  return {
    props: {
      notesData,
    },
  };
};

export default Note;
