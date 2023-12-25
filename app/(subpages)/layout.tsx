import Header from "../../_components/header";
import type { ReactNode } from "react";

const links = [
  { href: "/about", label: "about" },
  { href: "/blog", label: "blog" },
  { href: "/projects", label: "projects" },
];

const SubLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header render={true} links={links} home={false} />
      <div className="px-8 py-20 max-w-main-content mx-auto">{children}</div>
    </>
  );
};
export default SubLayout;
