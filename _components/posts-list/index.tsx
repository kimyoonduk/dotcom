"use client";

import { useState } from "react";
import type { Post } from "@/lib/types";

import BlockEntry from "@/_components/entry/block-entry";

type Props =
  | {
      posts: Post[];
      paginate?: boolean;
      displayCount?: number;
    }
  | {
      skeleton: true;
    };

const Posts = (props: Props) => {
  const [showMore, setShowMore] = useState(4);

  if ("skeleton" in props) {
    return (
      <ul className="max-w-main-content m-0 p-0">
        {[...Array(4)].map((_, i) => (
          <BlockEntry key={i} skeleton />
        ))}
      </ul>
    );
  }

  const { posts, paginate, displayCount } = props;

  const displayedPosts = posts.slice(0, displayCount ?? posts.length);

  return (
    <ul className="max-w-main-content m-0 p-0">
      {displayedPosts.slice(0, paginate ? showMore : undefined).map((post) => {
        const date = new Date(post.date).toLocaleDateString("en-US", {
          month: "numeric",
          day: "numeric",
          year: "numeric",
        });

        return (
          <BlockEntry
            key={`post-item-${post.slug}`}
            href={`/blog/${post.slug}`}
            title={post.title}
            description={post.description}
            thumbnail={post.thumbnail ?? ""}
            date={new Date(date)}
            views={post.views}
            tags={post.tags}
          />
        );
      })}
      {paginate && showMore < displayedPosts.length && (
        <button
          onClick={() => {
            setShowMore(showMore + 4);
          }}
          className="mt-2 w-full cursor-pointer text-primary-content bg-primary border-none py-2 px-4 outline-none"
        >
          Show More
        </button>
      )}
    </ul>
  );
};

export default Posts;
