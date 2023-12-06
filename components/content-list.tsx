import { Cards, Notes, WorkItem } from '@components';
import { IContent, IContentType } from '@utils/content';
import { HTMLAttributes } from 'react';

interface ContentListProps extends HTMLAttributes<HTMLElement> {
    items: IContent[]
    contentType: IContentType
    basePath: string
}

export function ContentList<T>({ items, contentType, basePath }: ContentListProps) {
    if (contentType === 'works') {
        return (
            <section>
                <section className="flex flex-col gap-8 pb-10 mb-10 border-b border-accent-8">
                    {items.filter(x => x.selectedWork).map(item => (
                        <WorkItem key={item.slug} work={item} />
                    ))}
                </section>

                <h3 className="text-3xl font-bold text-accent-3 mb-16 font-display">Other Experiments</h3>

                <section className="flex gap-8">
                    <WorkListGrid works={items.filter(x => !x.selectedWork)} />
                </section>
            </section>
        )
    }

    return (
        <Cards items={items} basePath={basePath} />
    )
}

function WorkListGrid({ works }: { works: IContent[] }) {
    return (
        <section className="flex flex-wrap gap-8 pb-10 mb-10">
            {works.map(item => (
                <WorkItem key={item.slug} work={item} grid />
            ))}
            {works.map(item => (
                <WorkItem key={item.slug} work={item} grid />
            ))}
        </section>
    )
}