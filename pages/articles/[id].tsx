import React from "react";
import { useRouter } from "next/router";

import { Layout, Container } from "../../components";
import { getAllContentIds, getContentData } from "../../lib/content";
import { StyledContent } from "../../components/styles/content.styles";

/**
 *  Renders articles markdown posts
 */

const Article = ({ notesData }: { notesData: INotesData }) => {
  const { pathname } = useRouter();
  const { title, contentHtml } = notesData;

  return (
    <Layout pathname={pathname} pageTitle={title}>
      <Container width="narrow">
        <StyledContent>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </StyledContent>
      </Container>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllContentIds("articles");
  return {
    paths,
    fallback: false,
  };
};

interface INotesData {
  id: string;
  contentHtml: string;
  date: Date;
  title: string;
}

export const getStaticProps = async ({ params }) => {
  const notesData: INotesData = await getContentData(params.id, "articles");
  return {
    props: {
      notesData,
    },
  };
};

export default Article;
