import Head from 'next/head'
import SiteConfig from '../config/index.json';

import '../components/styles/globals.css';
import Footer from '../components/footer';
import Nav from '../components/nav';

// TODO: how to pass props into this component like (pageTitle, pageDescription)
export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Head>
                {/* <title>{`${pageTitle} | ${SiteConfig.site.siteTitle}`}</title> */}
                <meta
                    name="keywords"
                    content={SiteConfig.site.keywords}
                    key="keywords"
                />
                {/* <meta
                    name="description"
                    key="description"
                    content={pageDescription || SiteConfig.site.siteDescription}
                /> */}


                {/* <meta property="og:title" content={pageTitle} key="ogtitle" /> */}
                {/* <meta
                    property="og:description"
                    content={pageDescription || SiteConfig.site.siteDescription}
                    key="ogdesc"
                /> */}
                <meta property="og:url" content={SiteConfig.site.siteUrl} key="ogurl" />
                <meta
                    property="og:image"
                    content={SiteConfig.site.siteImage}
                    key="ogimage"
                />
                <meta
                    property="og:site_name"
                    content={SiteConfig.site.siteName}
                    key="ogsitename"
                />

                <meta name="twitter:card" content="summary" key="twcard" />
                <meta
                    name="twitter:creator"
                    content={SiteConfig.author.twitterHandle}
                    key="twhandle"
                />

                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <body>
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    )
}