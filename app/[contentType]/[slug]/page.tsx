import { Chips, Container } from '@components';
import { IContentType, getContentData, getContentList, getContentTypes } from '@utils/content';
import { CONTENT_TYPES_MAP } from '@utils/content-types';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import BackButton from '../../../components/back-button';
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

    if (contentType === 'works') return <WorkPage work={content} />

    return (
        <Container width="narrow">
            <header>
                <section className="pt-16">
                    <h1 className="my-0 font-bold font-display mb-2 text-2xl/normal md:text-4xl max-w-xl">{content.title}</h1>
                    <time className="block text-accent-4 mb-8">{content.date.toString()}</time>
                    {content.previewImage && (
                        <Image className="pb-8 block object-cover" src={content.previewImage} height={550} width={1200} alt="" />
                    )}
                </section>
            </header>

            <Content html={content.contentHtml} />
            {content.tags && <Chips items={content.tags} />}
        </Container>

    );
};

function WorkPage({ work }: { work: IContentData }) {

    return (
        <Container className="flex flex-col lg:flex-row gap-4 pt-12">
            <section className="w-full lg:w-1/3 border-r border-accent-8 p-2 pr-8">
                <div className="mb-8 flex flex-col items-start gap-5">
                    <BackButton />
                    <h1 className="text-4xl font-bold font-display text-accent-3">{work.title}</h1>
                    <p className="text-accent-4">{work.description}</p>
                    <button>Se Demo</button>
                </div>

                <ul>
                    {Boolean(work.techStack?.length) && <MetadataListItem item="Tech Stack" value={work.techStack?.join(',') ?? ''} />}
                    <MetadataListItem item="Date" value={work.date.toString()} />
                    {work.problem && <MetadataListItem item="Problem" value={work.problem ?? ''} />}
                </ul>

            </section>

            <section className="w-full lg:w-2/3 p-2">
                <Image src={work.previewImage ?? ''} height={1000} width={1000} alt="" className="mb-4" />
                <Content html={work.contentHtml} />
            </section>

        </Container>
    )
}

function MetadataListItem({ item, value }: { item: string, value: string }) {
    return (
        <li className="list-none flex gap-4 border-b border-accent-8 py-3">
            <span className="text-accent-4 w-1/3">{item}</span>
            <span className="w-2/3 text-accent-2">{value}</span>
        </li>

    )
}

export interface IContentData {
    id: string;
    contentHtml: string;
    date: Date;
    title: string;
    previewImage?: string;
    description?: string;
    tags?: string[];
    category?: string;
    problem?: string;
    techStack?: string[];
}