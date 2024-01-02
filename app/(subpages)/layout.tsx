import Header from "../../_components/header";

const links = [
  { href: "/about", label: "about" },
  { href: "/blog", label: "blog" },
  { href: "/projects", label: "projects" },
];

const SubLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header render={true} links={links} home={false} />
      <div className="page-body">{children}</div>
    </>
  );
};
export default SubLayout;
