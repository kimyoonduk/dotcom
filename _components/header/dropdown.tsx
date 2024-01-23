"use client";

import { Menu } from "../icons";
import Link from "@/_components/link";

type LinkType = {
  href: string;
  label: string;
};

type DropdownProps = {
  links: LinkType[];
};

const Dropdown = ({ links }: DropdownProps) => {
  return (
    <details className="dropdown" id="menu-dropdown">
      <summary
        tabIndex={0}
        role="button"
        className="btn btn-ghost lg:hidden"
        id="header-menu"
      >
        <Menu />
      </summary>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52"
      >
        {links.map((link) => {
          return (
            <li
              key={link.href}
              onClick={() =>
                document
                  .querySelector("#menu-dropdown")
                  ?.removeAttribute("open")
              }
            >
              <Link href={link.href} className="capitalize">
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </details>
  );
};
export default Dropdown;
