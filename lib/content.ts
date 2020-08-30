import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { v4 as uuid } from "uuid";
import { exception } from "console";
import remark from "remark";
import html from "remark-html";

const workDirectory = path.join(process.cwd(), "content", "work");
const notesDirectory = path.join(process.cwd(), "content", "notes");
const articlesDirectory = path.join(process.cwd(), "content", "articles");

type ContentType = "articles" | "notes" | "work";

/**
 * Get IDs of all markdown post
 * @param {string} contentType Type of content to get ids
 */

export const getAllContentIds = (contentType: ContentType) => {
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

export const getContentData = async (id: string, contentType: ContentType) => {
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

export const getContentList = (contentType: ContentType) => {
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

      return { ...data, id: uuid() };
    });

  return content;
};
