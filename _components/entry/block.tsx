import Link from "next/link";
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
      thumbnail: string; // Ensure thumbnail is of type string
    }
  | {
      skeleton: true;
    };

const BlockEntry = (props: Props) => {
  if ("skeleton" in props) {
    return <li className="flex flex-col p-4 skeleton mb-4 h-36" />;
  }

  const { title, description, type, href, date, views, thumbnail } = props;
  return (
    <div className="card card-side bg-base-100 hover:bg-base-200 card-compact ">
      <figure className="w-1/4 max-h-48">
        <Image
          src={thumbnail}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "100%" }}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-body">
          {date && (
            <span className="">
              {date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          )}
        </div>
        <div className="card-body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlockEntry;
