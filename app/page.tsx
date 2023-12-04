import { Container, Header, WorkItem, Works } from '@components';
import { getContentList } from '@utils/content';
/**
 * Index page `/index`
 */

interface Testimonial {
    name: string;
    title: string;
    text: string;
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
            <Container width="default" className="flex flex-col gap-8 mb-20">
                {content.map((work) => (
                    <WorkItem key={work.slug} work={work} />
                ))}
            </Container>
            <Testimonials testimonials={testimonials} />
        </div>
    );
};

function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
    return (
        <div className="py-12">
            <Container>
                <h2 className="font-bold text-2xl mb-10 xl:mb-20 max-w-xs xl:max-w-md 2xl:text-4xl">What People Have To Say About Me...</h2>
            </Container>
            <section className="flex gap-4 overflow-x-auto w-auto">
                {testimonials.map((testimonial, idx) => (
                    <div key={idx} className="bg-accent-8 min-w-[400px] py-4 px-5 rounded-md select-none">
                        <header className="mb-6">
                            <h2 className="font-bold">{testimonial.name}</h2>
                            <p className="text-sm">{testimonial.title}</p>
                        </header>

                        <p>{testimonial.text}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Index;
