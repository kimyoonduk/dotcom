import { Suspense } from "react";
import { PostListRSC } from "@/_components/posts-list/rsc";
import { ProjectListRSC } from "@/_components/projects-list/rsc";

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
      <div className="page-body">
        <div className="mb-4 pb-4 prose w-max">
          <p>[insert greeting here] </p>
        </div>
        <div className="py-4">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectListRSC displayCount={2} />
          </Suspense>
        </div>
        <div className="py-4">
          <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
          <Suspense fallback={<div>Loading...</div>}>
            <PostListRSC paginate={true} displayCount={5} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
