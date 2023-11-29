
import { Container, ContentList } from '../../../../components';
import { IContentType, getContentWithTag } from '../../../../lib/content';
import { CONTENT_TYPES_MAP } from '../../utils';

// TODO: I need to rethink the tags page. I don't think I want to have a page for each tag.
// /notes/tags/programming & /articles/tags/programming. Instead I want to have a single page for all tags
// /tags/programming. I think this will be easier to manage and will be more intuitive for readers.

/**
 * Index page `/index`
 */
export default function ContentListPage({ params }) {
    const contentType = params.contentType as IContentType
    const tag = params.tag as IContentType

    const content = getContentWithTag(tag, contentType);
    const isNotes = contentType.toLowerCase() === 'notes';
    const { title, path, description } = CONTENT_TYPES_MAP.get(contentType);

    return (
        <>
            <Container width={isNotes ? 'narrow' : 'default'}>
                <h1 className="max-w-[80%] text-center my-0 mx-auto mb-4 text-4xl">
                    {title} Tags
                </h1>
                <p className="page-intro leading-normal">
                    {description}
                </p>
                <ContentList
                    basePath={path}
                    items={content}
                    mode={isNotes ? 'list' : 'grid'}
                />
            </Container>
        </>
    );
};

