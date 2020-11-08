import React from "react";
import { useRouter } from "next/router";
import Image from 'next/image'

import { Layout, Container } from "../../components";
import { getAllContentIds, getContentData } from "../../lib/content";
import { IContentData } from "../articles/[id]";
import { StyledContent } from "../../components/styles/content.styles";

/**
 *  Renders work markdown posts
 */

const Article = ({ worksData }) => {
  const { pathname } = useRouter();
  const { title, contentHtml, description } = worksData;

  return (
    <Layout pageTitle={title} pathname={pathname} pageDescription={description}>
      <Container width="narrow">
        <StyledContent>
          <time>{worksData.date}</time>
          {worksData.previewImage && <Image src={worksData.previewImage} height={550} width={1200} />}
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </StyledContent>
      </Container>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllContentIds("work");
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const worksData: IContentData = await getContentData(params.id, "work");
  return {
    props: {
      worksData,
    },
  };
};

export default Article;
