import { memo } from "react";
import Link from "next/link";
import ThemeSwitcher from "../theme/theme-switcher";
import IconLink from "../theme/icon-link";

import { Menu, Github, Linkedin, Twitter, Mail } from "../icons";

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
    <div className="px-2 hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {links.map((link) => {
          return (
            <li key={link.href} className="px-0.5">
              <Link href={link.href} className="capitalize font-medium">
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );

  const iconList = [
    { icon: <Github />, href: "https://www.github.com/kimyoonduk" },
    { icon: <Linkedin />, href: "https://www.linkedin.com/in/kimyoonduk" },
    { icon: <Twitter />, href: "https://www.twitter.com/kimyoonduk" },
    { icon: <Mail />, href: "mailto:yd@kimyoonduk.com" },
  ];

  const navEnd = home && (
    <ul className="menu menu-horizontal menu-sm pr-4 hidden sm:flex">
      {iconList.map((iconObj) => (
        <li key={iconObj.href} className="px-0.5">
          <IconLink iconComponent={iconObj.icon} href={iconObj.href} />
        </li>
      ))}
    </ul>
  );

  if (render) {
    return (
      <div>
        <nav className="py-4 px-4">
          <div className="navbar px-0 max-w-main-content mx-auto">
            <div className="navbar-start">
              {dropdown}
              {titleLink}
              {navCenter}
            </div>
            <div className="navbar-end">
              {navEnd}
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
