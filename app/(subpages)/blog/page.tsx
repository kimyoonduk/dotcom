import { PostListRSC } from "@/_components/posts-list/rsc";
import { Suspense } from "react";

export const metadata = {
  title: "Blog",
  description: "Blog Posts",
  alternates: {
    canonical: "https://kimyoonduk.com/blogs",
  },
};

const Blog = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostListRSC paginate={true} />
    </Suspense>
  );
};

export default Blog;
