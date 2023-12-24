import Link from "next/link";

type Props =
  | {
      title: string;
      description?: string;
      type?: string;
      href: string;
      date?: Date;
      views?: number;
      isThirdParty?: boolean;
    }
  | {
      skeleton: true;
    };

const BlockEntry = (props: Props) => {
  if ("skeleton" in props) {
    return <li className="" />;
  }

  const { title, description, type, href, date, views } = props;
  return (
    <li className="">
      <Link href={href} title={description || title} className="">
        {type && <div className="">{type}</div>}
        {date && (
          <div className="">
            {date && (
              <span className="">
                {date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            )}
            {views ? (
              <span className="">
                {views.toLocaleString()} {views === 1 ? "view" : "views"}
              </span>
            ) : null}
          </div>
        )}
        <h4 className="">{title}</h4>
        {description && <p className="">{description}</p>}
      </Link>
    </li>
  );
};

export default BlockEntry;
