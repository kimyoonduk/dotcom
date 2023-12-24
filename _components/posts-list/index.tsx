"use client";

import { useState } from "react";
import type { Post } from "@/lib/types";

import BlockEntry from "@/_components/entry/block";

type Props =
  | {
      posts: Post[];
      paginate?: boolean;
    }
  | {
      skeleton: true;
    };

const Posts = (props: Props) => {
  const [showMore, setShowMore] = useState(4);

  if ("skeleton" in props) {
    return (
      <ul className="">
        {[...Array(4)].map((_, i) => (
          <BlockEntry key={i} skeleton />
        ))}
      </ul>
    );
  }

  const { posts, paginate } = props;

  return (
    <ul className="">
      {posts.slice(0, paginate ? showMore : undefined).map((post) => {
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
            date={new Date(date)}
            views={post.views}
          />
        );
      })}
      {paginate && showMore < posts.length && (
        <button
          onClick={() => {
            setShowMore(showMore + 4);
          }}
          className=""
        >
          Show More
        </button>
      )}
    </ul>
  );
};

export default Posts;
