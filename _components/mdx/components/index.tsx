import { MDXComponents } from "mdx/types";
import NextImage from "next/image";
import Link from "@/_components/link";

import { Code } from "bright";
import { Tweet } from "react-tweet";

// import { MDXNote } from "./mdx-note";
import { MDXImage } from "./mdx-image";
// import Info from "@components/icons/info";
// import { FileTree, File, Folder } from "@components/file-tree";
// import Home from "@components/icons/home";
// import Diff from './mdx-diff'
// import dynamic from "next/dynamic";
// const Diff = dynamic(() => import("./mdx-diff"), {
//   ssr: false,
//   loading: () => (
//     <div
//       style={{
//         height: 400,
//         width: "100%",
//         display: "flex",
//         backgroundColor: "var(--light-gray)",
//       }}
//     />
//   ),
// });

export const mdxComponents: MDXComponents = {
  // destructure ref to bypass type error
  a: ({ children, ref, ...props }) => {
    return (
      <Link {...props} href={props.href || ""} highlight={true} newTab={true}>
        {children}
      </Link>
    );
  },
  pre: ({
    children,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLPreElement
  >) => {
    return (
      <Code {...props} theme="dark-plus">
        {children as any}
      </Code>
    );
  },
  img: MDXImage as any,
  Image: NextImage as any,
  // Note: MDXNote,
  //   icons
  // InfoIcon: Info,
  // HomeIcon: Home,
  // Diff: Diff as any,
  // file tree
  // FileTree: FileTree as any,
  // File: File as any,
  // Folder: Folder as any,

  Tweet: (props) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tweet {...props} />
    </div>
  ),
};
