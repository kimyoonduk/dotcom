import { MDXRemote } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeMathjax from "rehype-mathjax";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { mdxComponents } from "./components";

const PostBody = ({ children }: { children: string }) => {
  return (
    <MDXRemote
      source={children}
      options={{
        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
            remarkMath,
            //   remarkFrontmatter,
            //   remarkA11yEmoji,
            //   [
            //     remarkToc,
            //     {
            //       tight: true,
            //       maxDepth: 5,
            //     },
            //   ],
          ],
          rehypePlugins: [rehypeMathjax, rehypeSlug, rehypeAutolinkHeadings],
        },
      }}
      components={mdxComponents}
    />
  );
};
export default PostBody;
