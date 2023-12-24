import getPosts from "@/lib/get-posts";
import PostsList from ".";
import type { Post } from "@/lib/types";

export async function PostListRSC({ paginate }: { paginate?: boolean }) {
  const posts = await getPosts();
  const validPosts: Post[] = posts.filter(
    (post): post is Post => post !== null
  );

  return <PostsList posts={validPosts} paginate={paginate} />;
}
