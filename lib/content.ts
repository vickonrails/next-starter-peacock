import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { exception } from "console";

const caseStudiesDirectory = path.join(process.cwd(), "content", "work");
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
      filenames = fs.readdirSync(caseStudiesDirectory);
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

export const getContentData = (id: string, contentType: ContentType) => {
  let contentTypeDirectory;
  switch (contentType) {
    case "articles":
      contentTypeDirectory = articlesDirectory;
      break;

    case "notes":
      contentTypeDirectory = notesDirectory;
      break;

    case "work":
      contentTypeDirectory = caseStudiesDirectory;
      break;

    default:
      throw new exception("You have to provide a content type");
  }

  const fullPath = path.join(contentTypeDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult.data,
  };
};
