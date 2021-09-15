// eslint-disable-next-line unicorn/prefer-node-protocol
import fs from 'fs';
import { author, site } from '../config/index.json';
import { getContentList, sortByDate } from './content';

type NoteContent = {
  [key: string]: any;
  previewImage: string;
  id: string;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const RSS = require('rss');

const { siteName, siteTitle, siteUrl } = site;

export const notesContent = getContentList('notes');
export const articlesContent = getContentList('articles');

const year = new Date().getFullYear();

try {
  console.log(`🔃 - Generating RSS feed at rss.xml`);
  // Instantiate RSS feed
  const feed = new RSS({
    title: siteName,
    description: siteTitle,
    feed_url: `${siteUrl}/rss.xml`,
    site_url: siteUrl,
    image_url: `${siteUrl}/Logo.png`,
    managingEditor: author.name,
    webMaster: author.name,
    copyright: `${year} ${author.name}`,
    language: 'en',
  });

  // Add Notes content to feed
  notesContent.sort(sortByDate).forEach((contentItem: NoteContent) => {
    const { title, date, slug, description } = contentItem;
    const url = `${siteUrl}notes/${slug}`;

    feed.item({
      title,
      description: description,
      author: author.name,
      date,
      guid: url,
      url,
    });
  });

  // Add Articles content to feed
  articlesContent.sort(sortByDate).forEach((contentItem: NoteContent) => {
    const { title, date, slug, description } = contentItem;
    const url = `${siteUrl}/articles/${slug}`;
    feed.item({
      title,
      description: description,
      author: author.name,
      date,
      guid: url,
      url,
    });
  });

  // convert to xml format
  const xml = feed.xml();
  // write to rss.xml
  fs.writeFileSync('./public/rss.xml', xml);
  console.log(`🎉 - RSS feed generated at rss.xml`);
} catch (ex) {
  console.error(
    `😢 An error occurred while generating XML scripts: ${
      (ex as { message: string }).message
    }`,
  );
}
