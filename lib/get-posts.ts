import matter from "gray-matter";

import path from "path";
import fs from "fs/promises";
import { cache } from "react";

type Post = {
  title: string;
  slug: string;
  published: boolean;
  body: string;
};

export const getPosts = cache(async () => {
  const posts = await fs.readdir("./posts/");

  return Promise.all(
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
});

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post?.slug === slug) || null;
}

export default getPosts;

// Usage:
const posts = await getPosts();
const post = await getPost("my-post");
