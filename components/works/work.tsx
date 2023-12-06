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

export function WorkItem({ work, grid }: { work: IContent, grid?: boolean }) {
    if (grid) return <WorkGridItem work={work} />

    const { title, slug, description } = work
    return (
        <Link href={`/works/${slug}`} className={cn('group rounded-xl select-none no-underline flex flex-col py-10 w-full lg:flex-row transition-transform hover:cursor-pointer hover:scale-[102%] active:scale-95', COLORS_LOOKUP[slug])}>
            <section className="flex flex-col flex-1 xl:order-2">
                <Image className="w-full" src={work.previewImage ?? ''} alt="" width={500} height={300} />
            </section>

            <section className="flex flex-1 px-12"/**className="p-5 xl:px-11 xl:py-16 flex flex-1 xl:order-1"**/>
                <div className="max-w-md flex flex-col gap-4 justify-center">
                    <h2 className="font-bold text-2xl font-display">{title}</h2>
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

function WorkGridItem({ work }: { work: IContent }) {
    const { title, slug, description } = work

    return (
        <Link href={`/works/${slug}`} className={cn('group rounded-md no-underline select-none transition-transform hover:cursor-pointer hover:scale-[102%] bg-accent-8 w-[30%] active:scale-95', COLORS_LOOKUP[slug])}>
            <section className="">
                <Image className="w-full rounded-t-md" src={work.previewImage ?? ''} alt="" width={300} height={150} />
            </section>

            <section className="flex flex-1 p-4">
                <div className="max-w-md flex flex-col gap-2 justify-center">
                    <h2 className="font-bold text-base text-accent-1">{title}</h2>
                    <p className="description text-sm text-accent-4 mb-2">{description}</p>

                    <div className="flex gap-1 text-sm items-center">
                        <ArrowRight size={18} />
                        <span>More Info</span>
                    </div>
                </div>
            </section>

        </Link>
    )
}