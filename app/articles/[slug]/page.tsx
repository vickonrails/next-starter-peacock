import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Container, Layout } from '../../../components';
import { Chips } from '../../../components/chips/chips';
import { IContentType, getAllContentIds, getContentData } from '../../../lib/content';
import { usePathname } from 'next/navigation';

/**
 *  Renders articles markdown posts
 */

function fetchContentData(slug: string, contentType: IContentType) {
    let result;

    getContentData(
        slug,
        contentType
    ).then(res => {
        result = res;
    }).catch(err => {
        // 
    });

    return result
}

export default async function Article({ params }) {
    const paths = getAllContentIds('articles');
    const content = fetchContentData(params.slug, 'articles')

    return (
        <Container width="narrow">
            <section className="content">
                <time className="text-center block mb-8">{content.date.toString()}</time>
                {content.previewImage && (
                    <Image className="mb-4 block object-cover" src={content.previewImage} height={550} width={1200} alt="" />
                )}
                <div dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
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