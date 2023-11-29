import { Cards, Notes } from '@components';
import { IContent } from '@utils/content';
import { HTMLAttributes } from 'react';

interface ContentListProps extends HTMLAttributes<HTMLElement> {
    items: IContent[]
    mode?: 'list' | 'grid',
    basePath: string
}

export function ContentList<T>({ items, mode = 'grid', basePath }: ContentListProps) {
    if (mode === 'list') {
        return (
            <Notes notes={items} basePath={basePath} />
        )
    }

    return (
        <Cards items={items} basePath={basePath} />
    )
}

