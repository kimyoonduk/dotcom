import { Suspense } from "react";
import { PostListRSC } from "@/_components/posts-list/rsc";

import Header from "@/_components/header";

const links = [
  { href: "/about", label: "about" },
  { href: "/blog", label: "blog" },
  { href: "/projects", label: "projects" },
];

export default function Home() {
  return (
    <div className="">
      <Header render={true} home={true} links={links} />
      <div className="px-8 py-20 max-w-main-content mx-auto">
        <div>Thanks for visiting. Have a wonderful evening.</div>
        <h2>Recent Posts</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <PostListRSC paginate={true} displayCount={3} />
        </Suspense>
      </div>
    </div>
  );
}
