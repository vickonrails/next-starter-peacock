import React, { FC } from 'react';

import { Container, Cards } from '../components';
import DesignCode from '../components/design-code';
import ExperimentsSection from '../components/experiments';
import { getContentList } from '../lib/content';
import HomeHeader from '../components/header/home-header';

/**
 * Index page `/index`
 */

const Index = async () => {
    const works = await getContentList('works')
        .filter((work) => work.selectedWork);

    return (
        <>
            <HomeHeader />
            <Container>
                <Cards data={works} basePath="works" />
            </Container>
            <DesignCode />
            <ExperimentsSection />
        </>
    );
};

export default Index;
