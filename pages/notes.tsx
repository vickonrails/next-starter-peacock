import React from "react";
import { Layout } from "../components";
import { useRouter } from "next/router";

/**
 * Blog page `/blog`
 */
const Notes = () => {
  const { pathname } = useRouter();
  return (
    <Layout pageTitle="Notes" pathname={pathname}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illum
        dolores perferendis, optio reprehenderit et, amet earum ex ut quam
        incidunt ab rerum iure itaque aliquam? Placeat consequuntur provident
        qui?
      </p>
    </Layout>
  );
};

export default Notes;
