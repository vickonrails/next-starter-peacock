import React from "react";
import { useRouter } from "next/router";

import { Layout } from "../../components";
import { getAllPostsIds, getPostData } from "../../lib/posts";

/**
 *  Renders markdown posts
 */

const Post = ({ postData }) => {
  const { pathname } = useRouter();

  return <Layout pathname={pathname}>{postData.title}</Layout>;
};

export const getStaticPaths = async () => {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
