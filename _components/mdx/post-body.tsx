import { MDXRemote } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
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
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
        },
      }}
      components={mdxComponents}
    />
  );
};
export default PostBody;
