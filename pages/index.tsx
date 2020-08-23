import React, { FC } from "react";
import { useRouter } from "next/router";

import { Layout } from "../components";

const Index: FC = () => {
  const { pathname } = useRouter();
  return <Layout pathname={pathname}>Welcome to Next Starter Peacock</Layout>;
};

export default Index;
