import React, { FC } from 'react';
import PageHeader from '../../components/header/page-header';
import { Cards, Container } from '../../components';
import { getContentList } from '../../lib/content';

/**
 * Index page `/index`
 */

const Index: FC = async () => {
    const articles = getContentList('articles');

    return (
        <>
            <Container>
                <h1 className="max-w-[80%] text-center my-0 mx-auto mb-4">Articles</h1>
            </Container>
            <Container>
                <p className="page-intro">
                    More long form articles and essays about new things I&apos;m exploring and
                    learning about...
                </p>

                <blockquote>
                    All articles here are for demo purposes. But hey, the sky is the limit
                    🚀
                </blockquote>
                <Cards data={articles} basePath="articles" />
            </Container>
        </>
    );
};

export default Index;
