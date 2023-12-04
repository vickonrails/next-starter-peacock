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
                <section className="flex flex-col gap-8">
                    {items.filter(x => x.selectedWork).map(item => (
                        <WorkItem key={item.slug} work={item} />
                    ))}
                </section>

                <h3>Other Experiments</h3>

                <section className="flex gap-8">
                    {items.filter(x => !x.selectedWork).map(item => (
                        <WorkItem key={item.slug} work={item} />
                    ))}
                </section>
            </section>
        )
    }

    return (
        <Cards items={items} basePath={basePath} />
    )
}
