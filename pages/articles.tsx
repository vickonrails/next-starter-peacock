import React from 'react';
import { Cards, Container, ICard, Layout } from '../components';
import { getContentList } from '../lib/content';

/**
 * Article page `/articles`
 */

type Props = {
  articles: {
    date?: Date | undefined;
    previewImage: any;
    id: string;
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
  type NoteContent = {
    data: {
      title: string;
      id: string;
      slug: string;
      date: Date;
      previewImage: string;
      description: string;
    }[];
    previewImage: string;
    id: string;
  };
  const articles = getContentList('articles');
  console.log('articles', articles);
  return {
    props: { articles },
  };
};

export default Articles;
