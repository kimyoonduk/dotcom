import matter from "gray-matter";

import path from "path";
import fs from "fs/promises";
import { cache } from "react";

import { Post } from "./types";

export const getPosts = cache(async () => {
  const posts = await fs.readdir("./posts/");

  const postsWithMeta = await Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `./posts/${file}`;
        const postContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }

        return { ...data, body: content } as Post;
      })
  );

  const filtered = postsWithMeta
    .filter((post) => post !== null)
    .sort((a, b) =>
      a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0
    ) as Post[];

  return filtered;
});

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post?.slug === slug) || null;
}

export default getPosts;

// Usage:
const posts = await getPosts();
const post = await getPost("my-post");
