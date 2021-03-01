import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { v4 as uuid } from "uuid";
import { exception } from "console";
import remark from "remark";
import html from "remark-html";
import remarkPrism from "remark-prism";
import { IContentData } from "../pages/articles/[id]";

const workDirectory = path.join(process.cwd(), "content", "work");
const notesDirectory = path.join(process.cwd(), "content", "notes");
const articlesDirectory = path.join(process.cwd(), "content", "articles");

const tagsDirectory = path.join(process.cwd(), "config", "tags.json");

const tags = fs.readFileSync(tagsDirectory, "utf-8");

type IContentType = "articles" | "notes" | "work";

/**
 * Get IDs of all markdown post
 * @param {string} contentType Type of content to get ids
 */

export const getAllContentIds = (contentType: IContentType) => {
  let filenames;

  switch (contentType) {
    case "articles":
      filenames = fs.readdirSync(articlesDirectory);
      break;

    case "notes":
      filenames = fs.readdirSync(notesDirectory);
      break;

    case "work":
      filenames = fs.readdirSync(workDirectory);
      break;

    default:
      throw new exception("You have to provide a content type");
  }

  return filenames.map((filename) => {
    return {
      params: {
        // remove .md extension from filename
        id: filename.replace(/\.md$/, ""),
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
  let contentTypeDirectory;
  switch (contentType) {
    case "articles":
      contentTypeDirectory = articlesDirectory;
      break;

    case "notes":
      contentTypeDirectory = notesDirectory;
      break;

    case "work":
      contentTypeDirectory = workDirectory;
      break;

    default:
      throw new exception("You have to provide a content type");
  }

  const fullPath = path.join(contentTypeDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .use(remarkPrism)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    previewImage: matterResult.data.previewImage || "",
    description: matterResult.data.description || "",
  };
};

/**
 * Get content list for a particular content type
 * @param {string} contentType Type of content
 */
export const getContentList = (contentType: IContentType) => {
  let contentFiles;
  let contentDir;

  switch (contentType) {
    case "articles":
      contentFiles = fs.readdirSync(articlesDirectory);
      contentDir = articlesDirectory;
      break;

    case "notes":
      contentFiles = fs.readdirSync(notesDirectory);
      contentDir = notesDirectory;
      break;

    case "work":
      contentFiles = fs.readdirSync(workDirectory);
      contentDir = workDirectory;
      break;
  }

  const content = contentFiles
    .filter((content) => content.endsWith(".md"))
    .map((content) => {
      const path = `${contentDir}/${content}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });

      const { data } = matter(rawContent);

      return {
        ...data,
        previewImage: data.previewImage || "/images/image-placeholder.png",
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
  let contentDir;
  let contentFiles;

  switch (contentType) {
    case "articles":
      contentDir = articlesDirectory;
      break;

    case "notes":
      contentDir = notesDirectory;
      break;

    case "work":
      contentDir = workDirectory;
      break;
  }

  contentFiles = fs.readdirSync(contentDir);

  let contentData = contentFiles
    .filter((content) => content.endsWith(".md"))
    .map((content) => {
      const path = `${contentDir}/${content}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });

      const { data } = matter(rawContent);

      return {
        ...data,
        previewImage: data.previewImage || "/images/image-placeholder.png",
        id: uuid(),
      };
    });

  // console.log(contentData);

  const filteredContent = contentData.filter((content: IContentData) => {
    return content.tags && content.tags.includes(tag);
  });

  return filteredContent;
};

/**
 * Sorts content by their dates
 * @param a {Date} - Date of post 1
 * @param b {Date} - Date of post 2
 */
const sortByDate = (a, b) => {
  if (a.date > b.date) {
    return -1;
  } else if (a.date < b.date) {
    return 1;
  } else {
    return 0;
  }
};
