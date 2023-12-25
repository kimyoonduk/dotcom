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
      <div className=""></div>
    </div>
  );
}
