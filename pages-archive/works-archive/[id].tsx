import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'

import { Layout, Container } from '../../components';
import { getAllContentIds, getContentData } from '../../lib/content';
import { IContentData } from '../articles-archive/[id]-archive';

/**
 *  Renders work markdown posts
 */

const Article = ({ worksData }) => {
  const { pathname } = useRouter();
  const { title, contentHtml, description } = worksData;

  return (
    <Layout pageTitle={title} pathname={pathname} pageDescription={description}>
      <Container width="narrow">
        <section className="content">
          <time>{worksData.date}</time>
          {worksData.previewImage && <Image src={worksData.previewImage} height={550} width={1200} alt="" />}
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </section>
      </Container>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllContentIds('works');
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const worksData: IContentData = await getContentData(params.id, 'works');
  return {
    props: {
      worksData,
    },
  };
};

export default Article;
