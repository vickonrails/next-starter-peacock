import React from 'react';
import { useRouter } from 'next/router';
import { getContentWithTag } from '../../../lib/content';

import tagsJSON from '../../../config/tags.json';
import { Layout } from '../../../components/layout';
import { Container } from '../../../components/container';
import NotesComponent from '../../../components/notes/notes';

const Category = ({ content, title, description }) => {
  const { pathname } = useRouter();

  return (
    <Layout pageTitle={title} pathname={pathname} pageDescription={description}>
      <Container width="narrow">
        <p className="page-intro">{description}</p>
        <NotesComponent notes={content} basePath="notes" />
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

export const getStaticProps = async ({ params }) => {
  let content = getContentWithTag(params.tag, 'notes');
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
