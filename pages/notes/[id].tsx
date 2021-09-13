import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { Container, Layout } from '../../components';
import { Chips } from '../../components/chips/chips';
import { StyledContent } from '../../components/styles/content.styles';
import { getAllContentIds, getContentData } from '../../lib/content';
import { IContentData } from '../articles/[id]';

/**
 *  Renders notes markdown posts
 */

type Props = {
  notesData: IContentData;
};

const Note = ({ notesData }: Props) => {
  const { pathname } = useRouter();
  const { title, contentHtml, description } = notesData;

  return (
    <Layout pathname={pathname} pageTitle={title} pageDescription={description}>
      <Container width="narrow">
        <StyledContent>
          <time>{notesData.date}</time>
          {notesData.previewImage && (
            <Image src={notesData.previewImage} height={550} width={1200} />
          )}
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          {notesData.tags && <Chips items={notesData.tags} />}
        </StyledContent>
      </Container>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllContentIds('notes');

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

  const notesData: IContentData = await getContentData(paramsId, 'notes');
  return {
    props: {
      notesData,
    },
  };
};

export default Note;
