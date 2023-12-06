import { Container, Header, Testimonials, WorkItem } from '@components';
import { getContentList } from '@utils/content';
import { site, author } from '../config/index.json'
import { Metadata } from 'next';
/**
 * Index page `/index`
 */

export const metadata: Metadata = {
    title: `${site.siteTitle} | ${site.siteDescription}`,
    keywords: site.keywords.split(','),
    description: site.siteDescription,
    alternates: {
        types: {
            'application/rss+xml': [
                {
                    title: site.siteName,
                    url: `${site.siteUrl}rss.xml`
                }
            ]
        }
    },
    twitter: {
        card: 'summary',
        creator: author.twitterHandle
    },
    openGraph: {
        title: `${site.siteTitle} | ${site.siteDescription}`,
        description: site.siteDescription,
        url: site.siteUrl,
        images: site.siteImage,
        siteName: site.siteName,
    }
}

const testimonials = [
    {
        id: 1,
        name: 'Alexander Kleinen',
        title: 'Director of Engineering, Staffbase',
        text: 'Throughout our time working together, Victor consistently displayed an unwavering work ethic, going above and beyond to deliver outstanding results. Victor is always eager to expand his knowledge and stay up-to-date with the latest industry trends, showcasing his ambition and drive for continuous improvement.'
    },
    {
        id: 2,
        name: 'Tannaz Ekrami',
        title: 'Senior Agile Coach',
        text: "What sets Victor apart is his proactive and solutions-oriented mindset. He approaches challenges with enthusiasm, always seeking innovative ways to overcome obstacles. Victor's eagerness to learn and improve is evident in his contributions to the continuous improvement of the team."
    },
    {
        id: 2,
        name: 'Andrei Indries',
        title: 'Frontend Engineer',
        text: 'I was a colleague with Victor for 6 months and I can highly recommend him as a great software developer who is ready to help you out whenever needed. He is full of empathy and a really fun person and it was a pleasure working with him. I think he will be a great fit to any company and wish you all the best.'
    },
    {
        id: 2,
        name: 'Andrei Indries',
        title: 'Frontend Engineer',
        text: 'I was a colleague with Victor for 6 months and I can highly recommend him as a great software developer who is ready to help you out whenever needed. He is full of empathy and a really fun person and it was a pleasure working with him. I think he will be a great fit to any company and wish you all the best.'
    },
]

const Index = () => {
    const content = getContentList('works')
        .filter((work) => work.selectedWork);

    return (
        <div>
            <Header />
            {/* TODO: I can hash the selected index based on the colors */}
            <Container className="flex flex-col gap-8 mb-20 border-b border-accent-8 pb-9">
                {content.map((work) => (
                    <WorkItem key={work.slug} work={work} />
                ))}
            </Container>
            <Testimonials testimonials={testimonials} />
        </div>
    );
};

export default Index;
