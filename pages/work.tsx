import React from "react";
import { Layout } from "../components";
import { useRouter } from "next/router";

/**
 * Work page `/work`
 */
const Work = () => {
  const { pathname } = useRouter();
  return (
    <Layout pathname={pathname} pageTitle="My Work">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem sequi
        tempora nobis quos, consequuntur, expedita quasi velit qui debitis
        cupiditate vitae aliquid accusantium, ratione atque dignissimos dolores
        ex aliquam hic.
      </p>
    </Layout>
  );
};

export default Work;
