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
    const { title, slug, description, previewImage } = work
    return (
        <section className={cn('rounded-xl select-none no-underline flex flex-col lg:flex-row transition-transform hover:cursor-pointer hover:scale-[102%]', COLORS_LOOKUP[slug])}>
            <section className="flex flex-col flex-1 xl:order-2">
                <Image className="w-full" src={placeholderImg} alt="" width={100} height={100} />
            </section>

            <section className="p-5 xl:px-11 xl:py-16 flex flex-1 xl:order-1">
                <div className="max-w-md flex flex-col gap-4 justify-center">
                    <h2 className="font-bold text-xl">{title}</h2>
                    <p>{description}</p>

                    <div className="flex gap-6">
                        <Link href={`/works/${slug}`} className="flex gap-1 items-center">
                            <ArrowRight size={18} />
                            <span className="text-sm">See More</span>
                        </Link>
                        <a href="" className="flex gap-1 items-center">
                            <GitHub size={18} />
                            <span className="text-sm">See Repository</span>
                        </a>
                    </div>
                </div>
            </section>
        </section>
    )
}
