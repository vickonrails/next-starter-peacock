import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { useRouter } from 'next/router';
import { Container, Layout } from '../../../components';
import { INote } from '../../../components/notes/note';
import NotesComponent from '../../../components/notes/notes';
import categoryJSON from '../../../config/categories.json';
import { getContentInCategory } from '../../../lib/content';

type Props = {
  content: INote[];
  title: string;
  description: string;
};

const Category = ({ content, title, description }: Props) => {
  const { pathname } = useRouter();
  return (
    <Layout pageTitle={title} pathname={pathname} pageDescription={description}>
      <Container width="narrow">
        <p className="page-intro">{description}</p>
        <NotesComponent notes={content} basePath="articles" />
      </Container>
    </Layout>
  );
};

export const getStaticPaths = () => {
  // Get all the tags from the already defined site tags
  const paths = categoryJSON.map(({ category }) => {
    return {
      params: {
        category: category,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (
  context: GetStaticPropsContext,
): GetStaticPropsResult<Params> => {
  const { params } = context;

  if (!params?.category) {
    return {
      props: {},
    };
  }
  const contentCategory = Array.isArray(params.category)
    ? params.category[0]
    : params.category;

  const content = getContentInCategory(contentCategory, 'articles');
  const categoryObject = categoryJSON.filter(
    ({ category }) => category === params.category,
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
