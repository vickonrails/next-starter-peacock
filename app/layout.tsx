'use client'

import 'highlight.js/styles/tokyo-night-dark.css';

import '../components/globals.css';

import { Layout } from '@components';
import { ThemeProvider } from 'next-themes'
import { Manrope, Young_Serif } from 'next/font/google'

const manrope = Manrope({
    display: 'swap',
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-manrope'
})

const youngSerif = Young_Serif({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-young-serif'
})

// import { ThemeProvider } from '../components/ThemeContext';


// export const metadata: Metadata = {
//     title: `${site.siteTitle} | ${site.siteDescription}`,
//     keywords: site.keywords.split(','),
//     description: site.siteDescription,
//     alternates: {
//         types: {
//             'application/rss+xml': [
//                 {
//                     title: site.siteName,
//                     url: `${site.siteUrl}rss.xml`
//                 }
//             ]
//         }
//     },
//     twitter: {
//         card: 'summary',
//         creator: author.twitterHandle
//     },
//     openGraph: {
//         title: `${site.siteTitle} | ${site.siteDescription}`,
//         description: site.siteDescription,
//         url: site.siteUrl,
//         images: site.siteImage,
//         siteName: site.siteName,
//     }
// }

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${manrope.variable} ${youngSerif.variable}`}>
            <body className="bg-background text-accent-1 font-body">
                <ThemeProvider>
                    <Layout>
                        <main className="main bg-background">
                            {children}
                        </main>
                    </Layout>
                </ThemeProvider>
            </body>
        </html >
    )
}