import Link from "next/link";

const IconLink = ({
  iconComponent,
  href,
}: {
  iconComponent: JSX.Element;
  href: string;
}) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {iconComponent}
    </Link>
  );
};
export default IconLink;
