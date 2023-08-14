import React from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Container } from '../../../components';
import { Chips } from '../../../components/chips/chips';
import { IContentType, getContentData } from '../../../lib/content';
import { CONTENT_TYPES_MAP } from '../utils';
import Content from './content';

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