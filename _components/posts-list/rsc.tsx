import getPosts from "@/lib/get-posts";
import PostsList from ".";
import type { Post } from "@/lib/types";

export async function PostListRSC({
  paginate,
  displayCount,
}: {
  paginate?: boolean;
  displayCount?: number;
}) {
  const posts = await getPosts();
  const validPosts: Post[] = posts
    .filter((post): post is Post => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <PostsList
      posts={validPosts}
      paginate={paginate}
      displayCount={displayCount}
    />
  );
}
