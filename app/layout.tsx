import 'highlight.js/styles/tokyo-night-dark.css';
import { Metadata } from 'next';

import '../components/globals.css';

import { Layout } from '@components';
import { author, site } from '../config/index.json';

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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Layout>
                    <main className="min-h-[400px]">
                        {children}
                    </main>
                </Layout>
            </body>
        </html >
    )
}