import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { Layout, Container } from "../../components";
import { getAllContentIds, getContentData } from "../../lib/content";
import { IContentData } from "../articles/[id]";
import { StyledContent } from "../../components/styles/content.styles";
import { Chips } from "../../components/chips/chips";

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
          {notesData.previewImage && (
            <Image src={notesData.previewImage} height={550} width={1200} />
          )}
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          {notesData.tags && <Chips items={notesData.tags} />}
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
