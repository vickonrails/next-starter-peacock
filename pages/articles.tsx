import React from 'react';
import { Cards, Container, Layout } from '../components';

/**
 * Article page `/articles`
 */

type Props = {
  articles: {
    category: string;
    date: Date;
    description: string;
    id: string;
    previewImage: string;
    slug: string;
    tags: string;
    title: string;
  }[];
};

const Articles = ({ articles }: Props) => {
  return (
    <Layout
      pathname="/articles"
      pageTitle="Articles"
      pageDescription="Articles and Essays about Frontend Web Development and software engineering"
    >
      <Container>
        <p className="page-intro">
          More long form articles and essays about new things I'm exploring and
          learning about...
        </p>

        <blockquote>
          All articles here are for demo purposes. But hey, the sky is the limit
          <span aria-label="rocket" role="img">
            🚀
          </span>
        </blockquote>
        <Cards data={articles} basePath="articles" />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { getContentList } = await import('../lib/content');
  const articles = getContentList('articles');

  return {
    props: { articles },
  };
};

export default Articles;
