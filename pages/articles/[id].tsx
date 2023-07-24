import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Layout, Container } from '../../components';
import { getAllContentIds, getContentData } from '../../lib/content';
import { StyledContent } from '../../components/styles/content.styles';
import { Chips } from '../../components/chips/chips';

/**
 *  Renders articles markdown posts
 */

const Article = ({ articlesData }: { articlesData: IContentData }) => {
  const { pathname } = useRouter();
  const { title, contentHtml, description } = articlesData;

  return (
    <Layout pathname={pathname} pageTitle={title} pageDescription={description}>
      <Container width="narrow">
        <StyledContent>
          <time>{articlesData.date.toString()}</time>
          {articlesData.previewImage && (
            <Image src={articlesData.previewImage} height={550} width={1200} alt="" />
          )}
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          {articlesData.tags && <Chips items={articlesData.tags} />}
        </StyledContent>
      </Container>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllContentIds('articles');
  return {
    paths,
    fallback: false,
  };
};

export interface IContentData {
  id: string;
  contentHtml: string;
  date: Date;
  title: string;
  previewImage?: string;
  description?: string;
  tags?: string[];
  category?: string;
}

export const getStaticProps = async ({ params }) => {
  const articlesData: IContentData = await getContentData(
    params.id,
    'articles'
  );
  return {
    props: {
      articlesData,
    },
  };
};

export default Article;
