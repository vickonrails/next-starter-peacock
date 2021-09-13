import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { Params } from 'next/dist/server/router';
import { useRouter } from 'next/router';
import React from 'react';
import { Cards, Container, Layout } from '../../../components';
import tagsJSON from '../../../config/tags.json';
import { getContentWithTag } from '../../../lib/content';

type Props = {
  content: {
    title: string;
    id: string;
    slug: string;
    date: Date;
    previewImage: string;
    description: string;
  }[];
  title: string;
  description: string;
};

const Category = ({ content, title, description }: Props) => {
  const { pathname } = useRouter();
  return (
    <Layout pathname={pathname} pageTitle={title} pageDescription={description}>
      <Container>
        <p className="page-intro">{description}</p>

        <blockquote>
          All articles here are for demo purposes. But hey, the sky is the limit
          <span aria-label="rocket" role="img">
            🚀
          </span>
        </blockquote>
        <Cards data={content} basePath="articles" />
      </Container>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  // Get all the tags from the already defined site tags
  const paths = tagsJSON.map((tag) => {
    return {
      params: {
        tag: tag.tag,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<Params>> => {
  const { params } = context;

  if (!params?.tag) {
    return {
      props: {},
    };
  }

  const contentTag = Array.isArray(params.tag) ? params.tag[0] : params.tag;

  const content = getContentWithTag(contentTag, 'articles');
  const tagObject = tagsJSON.filter((json) => json.tag === params.tag)[0];

  return {
    props: {
      content,
      title: tagObject.title,
      description: tagObject.description,
    },
  };
};

export default Category;
