import Document, { Head, Main, NextScript, Html } from "next/document";

import { site } from "../config/index.json";
import ANALYTICS_ID from "../lib/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`}
          />
          <link
            href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`}
            rel="stylesheet"
          />

          <link
            rel="alternate"
            type="application/rss+xml"
            title={site.siteName}
            href={`${site.siteUrl}rss.xml`}
          />

          {/* Add plausible analytics */}
          <script
            async
            defer
            data-domain="victorofoegbu.com"
            src="https://plausible.io/js/plausible.js"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
