import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import highlight from 'remark-highlight.js';
import { v4 as uuid } from 'uuid';

const workDirectory = path.join(process.cwd(), 'content', 'work');
const notesDirectory = path.join(process.cwd(), 'content', 'notes');
const articlesDirectory = path.join(process.cwd(), 'content', 'articles');

type IContentType = 'articles' | 'notes' | 'work';

/**
 * Get IDs of all markdown post
 * @param {string} contentType Type of content to get ids
 */

export const getAllContentIds = (contentType: IContentType) => {
  let filenames;
  let baseDir: string;

  // determine where to look for content types
  switch (contentType) {
    case 'articles':
      baseDir = articlesDirectory;
      filenames = fs.readdirSync(articlesDirectory);
      break;

    case 'notes':
      baseDir = notesDirectory;
      filenames = fs.readdirSync(notesDirectory);
      break;

    case 'work':
      baseDir = workDirectory;
      filenames = fs.readdirSync(workDirectory);
      break;

    default:
      throw new Error('You have to provide a content type');
  }

  // return the slug of all the content IDs
  return filenames.map((filename) => {
    const filePath = path.join(baseDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const matterResult = matter(fileContent);

    return {
      params: {
        // This is where we switch it up to use slug instead of the filename for generating pages
        // id: filename.replace(/\.md$/, ""),
        id: matterResult.data.slug,
      },
    };
  });
};

/**
 * Get data for a given post id
 * @param {string} id ID of the post being passed
 * @param {string} contentType Type of content
 */

export const getContentData = async (id: string, contentType: IContentType) => {
  let contentTypeDirectory: string;
  let filenames;
  switch (contentType) {
    case 'articles':
      filenames = fs.readdirSync(articlesDirectory);
      contentTypeDirectory = articlesDirectory;
      break;

    case 'notes':
      filenames = fs.readdirSync(notesDirectory);
      contentTypeDirectory = notesDirectory;
      break;

    case 'work':
      filenames = fs.readdirSync(workDirectory);
      contentTypeDirectory = workDirectory;
      break;

    default:
      throw new Error('You have to provide a content type');
  }

  // loop through all the content types and compare the slug to get the filename
  const match = filenames.filter((filename) => {
    const filePath = path.join(contentTypeDirectory, filename);

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const matterResult = matter(fileContent);
    const { slug } = matterResult.data;
    return slug === id;
  });

  // use the returned path to get the fullpath and read the file content
  const fullPath = path.join(contentTypeDirectory, match[0]);
  // const fullPath = path.join(contentTypeDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(highlight)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    previewImage: matterResult.data.previewImage || '',
    description: matterResult.data.description || '',
    tags: matterResult.data.tags || [],
    category: matterResult.data.category || '',
  };
};

/**
 * Get content list for a particular content type
 * @param {string} contentType Type of content
 */
export const getContentList = (contentType: IContentType) => {
  let contentFiles;
  let contentDir: string;

  switch (contentType) {
    case 'articles':
      contentFiles = fs.readdirSync(articlesDirectory);
      contentDir = articlesDirectory;

      break;

    case 'notes':
      contentFiles = fs.readdirSync(notesDirectory);
      contentDir = notesDirectory;
      break;

    case 'work':
      contentFiles = fs.readdirSync(workDirectory);
      contentDir = workDirectory;
      break;
  }

  const content: { date?: Date; previewImage: any; id: string }[] = contentFiles
    .filter((contentFile) => contentFile.endsWith('.md'))
    .map((contentFile) => {
      const filePath = `${contentDir}/${contentFile}`;
      const rawContent = fs.readFileSync(filePath, {
        encoding: 'utf-8',
      });

      const { data } = matter(rawContent);

      return {
        ...data,
        previewImage: data.previewImage || '/images/image-placeholder.png',
        id: uuid(),
      };
    });

  return content.sort(sortByDate);
};

/**
 * Get content type with particular tag
 * @param {string} tag - tag to filter by
 */
export const getContentWithTag = (tag: string, contentType: IContentType) => {
  let contentDir: string;

  switch (contentType) {
    case 'articles':
      contentDir = articlesDirectory;
      break;

    case 'notes':
      contentDir = notesDirectory;
      break;

    case 'work':
      contentDir = workDirectory;
      break;
  }

  const contentFiles = fs.readdirSync(contentDir);

  const contentData = contentFiles
    .filter((contentFile) => contentFile.endsWith('.md'))
    .map((contentFile) => {
      const filePath = `${contentDir}/${contentFile}`;
      const rawContent = fs.readFileSync(filePath, {
        encoding: 'utf-8',
      });

      const { data } = matter(rawContent);

      return {
        ...data,
        previewImage: data.previewImage || '/images/image-placeholder.png',
        id: uuid(),
      };
    });

  const filteredContent: { date?: Date; previewImage: any; id: string }[] =
    contentData.filter(
      (content: { [key: string]: any; previewImage: any; id: string }) => {
        return content.tags && content.tags.includes(tag);
      },
    );

  return filteredContent.sort(sortByDate);
};

/**
 * Get content type with particular tag
 * @param {string} tag - tag to filter by
 */
export const getContentInCategory = (
  category: string,
  contentType: IContentType,
) => {
  let contentDir: string;

  switch (contentType) {
    case 'articles':
      contentDir = articlesDirectory;
      break;

    case 'notes':
      contentDir = notesDirectory;
      break;

    case 'work':
      contentDir = workDirectory;
      break;
  }

  const contentFiles = fs.readdirSync(contentDir);

  const contentData = contentFiles
    .filter((contentFile) => contentFile.endsWith('.md'))
    .map((contentFile) => {
      const filePath = `${contentDir}/${contentFile}`;
      const rawContent = fs.readFileSync(filePath, {
        encoding: 'utf-8',
      });

      const { data } = matter(rawContent);

      return {
        ...data,
        previewImage: data.previewImage || '/images/image-placeholder.png',
        id: uuid(),
      };
    });

  const filteredContent: { date?: Date; previewImage: any; id: string }[] =
    contentData.filter(
      (content: { [key: string]: any; previewImage: any; id: string }) => {
        return content.category && content.category === category;
      },
    );

  return filteredContent.sort(sortByDate);
};

export const sortByDate = (a: { date?: Date }, b: { date?: Date }) => {
  if (!a.date || !b.date) return 0;
  if (a.date > b.date) {
    return -1;
  } else if (a.date < b.date) {
    return 1;
  } else {
    return 0;
  }
};
