import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { Container, Layout } from '../../components';
import { Chips } from '../../components/chips/chips';
import { StyledContent } from '../../components/styles/content.styles';
import { getContentData } from '../../lib/content';

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
            <Image src={articlesData.previewImage} height={550} width={1200} />
          )}
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          {articlesData.tags && <Chips items={articlesData.tags} />}
        </StyledContent>
      </Container>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const { getAllContentIds } = await import('../../lib/content');
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id) {
    return {
      props: {},
    };
  }

  const contentId = Array.isArray(params.id) ? params.id[0] : params.id;

  const articlesData: IContentData = await getContentData(
    contentId,
    'articles',
  );
  return {
    props: {
      articlesData,
    },
  };
};

export default Article;
