import React from "react";
import { useRouter } from "next/router";

import { Layout, Container } from "../../components";
import { getAllContentIds, getContentData } from "../../lib/content";
import { IContentData } from "../articles/[id]";
import { StyledContent } from "../../components/styles/content.styles";

/**
 *  Renders notes markdown posts
 */

const Note = ({ notesData }) => {
  const { pathname } = useRouter();
  const { title, contentHtml, description } = notesData;

  return (
    <Layout pathname={pathname} pageTitle={title} pageDescription={description}>
      <Container width="narrow">
        <StyledContent>
          <time>{notesData.date}</time>
          {notesData.previewImage && <img src={notesData.previewImage} />}
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </StyledContent>
      </Container>
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
  const notesData: IContentData = await getContentData(params.id, "notes");
  return {
    props: {
      notesData,
    },
  };
};

export default Note;
