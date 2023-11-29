
import { Cards, Container } from '../components';
import DesignCode from '../components/design-code';
import ExperimentsSection from '../components/experiments';
import HomeHeader from '../components/header/home-header';
import { getContentList } from '../lib/content';

/**
 * Index page `/index`
 */

const Index = () => {
    const content = getContentList('works')
        .filter((work) => work.selectedWork);

    return (
        <>
            <HomeHeader />
            <Container>
                <Cards items={content} basePath="works" />
            </Container>
            <DesignCode />
            <ExperimentsSection />
        </>
    );
};

export default Index;
