import { Chips, Container } from '@components';
import { IContentType, getContentData, getContentList, getContentTypes } from '@utils/content';
import { CONTENT_TYPES_MAP } from '@utils/content-types';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Content from './content';

/**
 * statically generate all content pages
 */
export async function generateStaticParams() {
    const contentTypes = getContentTypes();

    return contentTypes.map(contentType => {
        const contentList = getContentList(contentType);
        return contentList.map(({ slug }) => {
            return {
                contentType,
                slug
            }
        })
    }).flat()
}

/**
 *  Renders articles markdown posts
 */

async function fetchContentData(slug: string, contentType: IContentType) {
    return await getContentData(slug, contentType)
}

type Params = {
    slug: string
    contentType: IContentType
}

export default async function ContentPage({ params }) {
    const { slug, contentType } = params as Params

    if (!CONTENT_TYPES_MAP.has(contentType)) {
        return notFound();
    }

    const content = await fetchContentData(slug, contentType);

    return (
        <Container width="narrow">
            <h1 className="max-w-[80%] text-center my-0 mx-auto mb-4 text-2xl md:text-4xl">{content.title}</h1>
            <section className="content">
                <time className="time mb-8">{content.date.toString()}</time>
                {content.previewImage && (
                    <Image className="mb-4 block object-cover" src={content.previewImage} height={550} width={1200} alt="" />
                )}
                <Content html={content.contentHtml} />
            </section>
            {content.tags && <Chips items={content.tags} />}
        </Container>

    );
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