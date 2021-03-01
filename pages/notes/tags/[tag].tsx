import React from "react";
import { useRouter } from "next/router";
import { getAllContentIds, getContentWithTag } from "../../../lib/content";

import tagsJSON from "../../../config/tags.json";

const category = ({ content }) => {
  console.log(content);
  const { pathname } = useRouter();
  return (
    <>
      <div>{JSON.stringify(content)}</div>
      <div>Category {pathname}</div>
    </>
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
  let content = getContentWithTag(params.category, "notes");
  return {
    props: { content },
  };
};

export default category;
