import React from 'react';
import { notFound } from 'next/navigation';

import { Metadata } from 'next';
import { IContentType, getContentWithTag } from '../../../../lib/content';
import { CONTENT_TYPES_MAP } from '../../utils';
import { Container, ContentList } from '../../../../components';

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

