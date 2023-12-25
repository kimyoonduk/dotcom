import { memo } from "react";
import Link from "next/link";
import ThemeSwitcher from "../theme/theme-switcher";

import { Menu, Github } from "../icons";

type Props = {
  render: boolean;
  home: boolean;
  links: { href: string; label: string }[];
};

export const Header = ({ render, home, links }: Props) => {
  const dropdown = (
    <details className="dropdown">
      <summary tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <Menu />
      </summary>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52"
      >
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
    </details>
  );

  const title = <h1 className="text-xl font-bold px-3">kimYoonDuk</h1>;
  const titleLink = home ? title : <Link href="/">{title}</Link>;

  const navCenter = (
    <ul className="menu menu-horizontal px-1">
      {links.map((link) => {
        return (
          <li key={link.href} className="px-0.5">
            <Link href={link.href} className="capitalize">
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  if (render) {
    return (
      <div>
        <nav className="bg-base-300 py-4 px-4">
          <div className="navbar px-0 max-w-main-content mx-auto">
            <div className="navbar-start">
              {dropdown}
              {titleLink}
              <div className="px-2 hidden lg:flex">{navCenter}</div>
            </div>
            <div className="navbar-end">
              <Github />
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
