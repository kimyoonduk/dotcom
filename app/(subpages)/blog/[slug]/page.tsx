import { notFound } from "next/navigation";

import getPosts, { getPost } from "@/lib/get-posts";
import PostBody from "@/_components/mdx/post-body";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post!.slug }));
}

const BlogPost = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const post = await getPost(params.slug);
  if (!post) return notFound();
  return <PostBody>{post?.body}</PostBody>;
};
export default BlogPost;
