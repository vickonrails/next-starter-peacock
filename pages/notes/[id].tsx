import React from "react";
import { useRouter } from "next/router";

import { Layout } from "../../components";
import { getAllContentIds, getContentData } from "../../lib/content";

/**
 *  Renders notes markdown posts
 */

const Note = ({ notesData }) => {
  const { pathname } = useRouter();

  return <Layout pathname={pathname}>{notesData.title}</Layout>;
};

export const getStaticPaths = async () => {
  const paths = getAllContentIds("notes");
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const notesData = getContentData(params.id, "notes");
  return {
    props: {
      notesData,
    },
  };
};

export default Note;
