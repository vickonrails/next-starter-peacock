import { Container, ContentList } from '@components';
import { IContentType, getContentList, getContentTypes } from '@utils/content';
import { CONTENT_TYPES_MAP } from '@utils/content-types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { site } from '../../config/index.json';

/** generate list page metadata */
export function generateMetadata({ params }): Metadata {
    const contentType = CONTENT_TYPES_MAP.get(params.contentType)
    return {
        title: `${contentType.title} | ${site.siteTitle}`,
        description: contentType.description
    }
}

export async function generateStaticParams() {
    const contentTypes = getContentTypes();
    return Array.from(contentTypes).map(contentType => ({
        contentType
    }))
}

/**
 * Index page `/index`
 */
export default function ContentListPage({ params }) {
    const contentType = params.contentType as IContentType

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
                <h1 className="max-w-[80%] text-center my-0 mx-auto mb-4">
                    {title}
                </h1>
                <p className="page-intro">
                    {description}
                </p>
                <ContentList
                    basePath={path}
                    items={content}
                    contentType={contentType}
                />
            </Container>
        </>
    );
};

