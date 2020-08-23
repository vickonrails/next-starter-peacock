import React from "react";
import { useRouter } from "next/router";

import { Layout } from "../components";

const About = () => {
  const { pathname } = useRouter();
  return <Layout pathname={pathname}>About Page</Layout>;
};

export default About;
