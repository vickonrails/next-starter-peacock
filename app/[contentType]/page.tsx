import { Container, ContentList } from '@components';
import { IContentType, getContentList, getContentTypes } from '@utils/content';
import { CONTENT_TYPES_MAP } from '@utils/content-types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { site } from '../../config/index.json';
import { generateRSS } from '@utils/rss';

type Params = {
    contentType: IContentType;
  };

/** generate list page metadata */
export function generateMetadata({ params }: { params: Params }): Metadata {
    const contentType = CONTENT_TYPES_MAP.get(params.contentType)
    return {
        title: `${contentType.title} | ${site.siteTitle}`,
        description: contentType.description
    }
}

export async function generateStaticParams() {
    generateRSS();

    const contentTypes = getContentTypes();
    return Array.from(contentTypes).map(contentType => ({
        contentType
    }))
}

/**
 * Index page `/index`
 */
export default function ContentListPage({ params }: { params: Params }) {
    const contentType = params.contentType;

    // redirect to 404 with wrong contentType
    if (!CONTENT_TYPES_MAP.has(contentType)) {
        return notFound();
    }

    const content = getContentList(contentType);
    const isNotes = contentType.toLowerCase() === 'notes';
    const { title, path, description } = CONTENT_TYPES_MAP.get(contentType);

    return (
        <>
            <Container width={isNotes ? 'narrow' : 'default'}>
                <section className="flex flex-col py-20 gap-2 max-w-2xl">
                    <h1 className="text-4xl font-bold font-display">
                        {title}
                    </h1>
                    <p className="text-accent-4 text-lg">
                        {description}
                    </p>
                </section>

                <ContentList
                    basePath={path}
                    items={content}
                    contentType={contentType}
                />
            </Container>
        </>
    );
};

