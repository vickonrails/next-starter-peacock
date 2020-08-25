import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

/**
 * Get IDs of all markdown post
 */
export const getAllPostsIds = () => {
  const filenames = fs.readdirSync(postsDirectory);

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
 */
export const getPostData = (id) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult.data,
  };
};
