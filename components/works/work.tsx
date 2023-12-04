import { cn } from '@utils/cn';
import { IContent } from '@utils/content';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, GitHub } from 'react-feather'
import placeholderImg from '/public/images/placeholder.jpg'

const COLORS_LOOKUP = {
    'job-quest': 'bg-accent-delight text-white',
    'delight': 'bg-accent-8',
    'bob': 'bg-accent-bob text-white',
}

export function WorkItem({ work }: { work: IContent }) {
    const { title, slug, description } = work
    return (
        <Link href={`/works/${slug}`} className={cn('group rounded-xl select-none no-underline flex flex-col py-10 w-full lg:flex-row transition-transform hover:cursor-pointer hover:scale-[102%]', COLORS_LOOKUP[slug])}>
            <section className="flex flex-col flex-1 xl:order-2">
                <Image className="w-full" src={work.previewImage ?? ''} alt="" width={400} height={400} />
            </section>

            <section className="flex flex-1 px-12"/**className="p-5 xl:px-11 xl:py-16 flex flex-1 xl:order-1"**/>
                <div className="max-w-md flex flex-col gap-4 justify-center">
                    <h2 className="font-bold text-2xl">{title}</h2>
                    <p className="description opacity-75">{description}</p>

                    <div className="flex gap-1 items-center">
                        <ArrowRight size={18} />
                        <span>More Info</span>
                    </div>
                </div>
            </section>
        </Link>
    )
}
