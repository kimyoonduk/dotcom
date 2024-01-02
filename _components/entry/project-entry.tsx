import Link from "next/link";
import { ExtLink, Github } from "../icons";
import IconLink from "../theme/icon-link";

type Props = {
  href: string;
  title: string;
  description: string;
  role: string;
  years: string[];
  showYears: boolean;
  stars?: number;
  gitUrl?: string;
};

const ProjectEntry = ({
  href,
  title,
  description,
  role,
  years,
  showYears = true,
  stars,
  gitUrl,
}: Props) => {
  const tags = ["temp"];

  return (
    <div className="card md:card-side bg-base-100 hover:bg-base-200 card-compact rounded-none">
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <IconLink iconComponent={<ExtLink size={18} />} href={href} />
          {gitUrl && (
            <IconLink iconComponent={<Github size={18} />} href={gitUrl} />
          )}
        </h2>
        <div className="card-body">
          {showYears && (
            <span className="text-sm">
              {years[0]} {years[1] ? "-" : ""} {years[1]}
            </span>
          )}
        </div>
        <div className="card-body">
          {tags && ( // If tags exist, render them
            <div className="flex flex-row">
              {tags.map((tag) => (
                <span className="badge badge-outline badge-accent mr-2">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="card-body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectEntry;
