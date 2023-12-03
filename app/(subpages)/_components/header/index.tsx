import { memo } from "react";
import Link from "next/link";

const links = [
  { href: "/about", label: "about" },
  { href: "/blog", label: "blog" },
  { href: "/projects", label: "projects" },
];

type Props = {
  render: boolean;
  title: string;
};

export const Header = ({ render, title }: Props) => {
  if (render) {
    return (
      <div>
        <nav className="bg-base-300 py-4">
          <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
            <Link href="/" className="btn btn-primary">
              Next.js
            </Link>
            <ul className="menu menu-horizontal md:ml-8">
              {links.map((link) => {
                return (
                  <li key={link.href}>
                    <Link href={link.href} className="capitalize">
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <nav aria-hidden={true}>
        <div className="">{title && <div className="">{title}</div>}</div>
      </nav>
    );
  }
};

export default memo(Header);
