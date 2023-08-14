import React from 'react';
import { useRouter } from 'next/router';
import { getContentInCategory } from '../../../lib/content';

import categoryJSON from '../../../config/categories.json';
import { Container, Layout } from '../../../components';
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
  const paths = categoryJSON.map((category) => {
    return {
      params: {
        category: category.category,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  let content = getContentInCategory(params.category, 'notes');
  const categoryObject = categoryJSON.filter(
    (category) => category.category === params.category
  )[0];

  return {
    props: {
      content,
      title: categoryObject.title,
      description: categoryObject.description,
    },
  };
};

export default Category;
