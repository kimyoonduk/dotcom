import Link from "@/_components/link";
import Image from "next/image";

type Props =
  | {
      title: string;
      description?: string;
      type?: string;
      href: string;
      date?: Date;
      views?: number;
      isThirdParty?: boolean;
      thumbnail?: string; // Ensure thumbnail is of type string
      tags?: string[];
    }
  | {
      skeleton: true;
    };

const BlockEntry = (props: Props) => {
  if ("skeleton" in props) {
    return <div className="flex flex-col p-4 skeleton mb-4 h-36" />;
  }

  const { title, description, type, href, date, views, thumbnail, tags } =
    props;
  return (
    <Link href={href}>
      <div className="card md:card-side max-h-52 bg-base-100 hover:bg-base-200 card-compact rounded-none group py-4">
        <div className="card-body">
          <h2 className="card-title group-hover:text-primary">{title}</h2>
          <div className="mb-2 prose">
            <p>{description}</p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="pr-2 prose-sm">
              {date && (
                <p>
                  {`${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(
                    -2
                  )}-${("0" + date.getDate()).slice(-2)}`}
                </p>
              )}
            </div>
            <div className="md:pt-0 md:px-2">
              {tags && ( // If tags exist, render them
                <div className="flex flex-row flex-wrap">
                  {tags.map((tag) => (
                    <span
                      className="badge badge-outline badge-secondary mr-2 mt-1 md:mt-0"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {thumbnail && (
          <div className="w-1/4 max-h-48 hidden md:flex">
            <figure className="">
              <Image
                src={thumbnail}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "100%" }}
                alt=""
              />
            </figure>
          </div>
        )}
      </div>
    </Link>
  );
};

export default BlockEntry;
