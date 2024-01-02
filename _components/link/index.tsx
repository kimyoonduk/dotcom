import clsx from "clsx";

import NextLink from "next/link";

type LinkProps = React.ComponentProps<typeof NextLink>;
type Props = LinkProps & {
  external?: boolean;
  href: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
  // tabIndex?: number
};

const linkStyle = "link-info link-hover";

const Link = ({
  external,
  href,
  children,
  className: classNameProp = "",
  title,
  highlight = false,
  tabIndex = 0,
  ...props
}: Props) => {
  const className = clsx(classNameProp, highlight && linkStyle);

  return (
    <NextLink href={href} title={title} className={className} {...props}>
      {children}
    </NextLink>
  );
};
export default Link;
