import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { Container, Layout } from '../../components';
import { StyledContent } from '../../components/styles/content.styles';
import { getContentData } from '../../lib/content';
import { IContentData } from '../articles/[id]';

/**
 *  Renders work markdown posts
 */

type Props = {
  worksData: IContentData;
};

const Article = ({ worksData }: Props) => {
  const { pathname } = useRouter();
  const { title, contentHtml, description } = worksData;

  return (
    <Layout pageTitle={title} pathname={pathname} pageDescription={description}>
      <Container width="narrow">
        <StyledContent>
          <time>{worksData.date.toString()}</time>
          {worksData.previewImage && (
            <Image src={worksData.previewImage} height={550} width={1200} />
          )}
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </StyledContent>
      </Container>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const { getAllContentIds } = await import('../../lib/content');
  const paths = getAllContentIds('work');
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id) {
    return {
      props: {},
    };
  }

  const paramsId = Array.isArray(params.id) ? params.id[0] : params.id;

  const worksData: IContentData = await getContentData(paramsId, 'work');
  return {
    props: {
      worksData,
    },
  };
};

export default Article;
