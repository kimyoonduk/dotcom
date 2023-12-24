import { memo } from "react";
import Link from "next/link";
import ThemeSwitcher from "../theme/theme-switcher";

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
            <ul className="menu menu-horizontal md:ml-8">
              <li>
                <Link href="/" className="">
                  Home
                </Link>
              </li>
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
            <div className="navbar-end">
              <ThemeSwitcher />
            </div>
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
