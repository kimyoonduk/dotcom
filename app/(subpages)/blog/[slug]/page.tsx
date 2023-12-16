import getPosts, { getPost } from "@/lib/get-posts";
import { notFound } from "next/navigation";

const BlogPost = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const post = await getPost(params.slug);
  if (!post) return notFound();
  return <>{post?.body}</>;
};
export default BlogPost;
