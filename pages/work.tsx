import React from "react";
import { Layout } from "../components";
import { useRouter } from "next/router";

const Work = () => {
  const { pathname } = useRouter();
  return (
    <Layout pathname={pathname}>
      <h1>My Work</h1>
    </Layout>
  );
};

export default Work;
