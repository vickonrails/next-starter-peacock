import { Cards, Container, DesignCode, ExperimentsSection, Header } from '@components';
import { getContentList } from '@utils/content';

/**
 * Index page `/index`
 */

const Index = () => {
    const content = getContentList('works')
        .filter((work) => work.selectedWork);

    return (
        <>
            <Header />
            <Container>
                <Cards items={content} basePath="works" />
            </Container>
            <DesignCode />
            <ExperimentsSection />
        </>
    );
};

export default Index;
