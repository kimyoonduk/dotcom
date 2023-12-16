import { notFound } from "next/navigation";

import getPosts, { getPost } from "@/lib/get-posts";
import PostBody from "@/mdx/post-body";

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
