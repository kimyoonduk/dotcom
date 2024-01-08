import Link from "@/_components/link";
import { ExtLink, Github } from "../icons";
import IconLink from "../theme/icon-link";

import type { Project } from "@/lib/types";

const ProjectEntry = ({
  href,
  title,
  description,
  role,
  years,
  showYears = true,
  stars,
  gitUrl,
  tech,
}: Project) => {
  return (
    <div className="card md:card-side bg-base-100 card-compact rounded-none hover:bg-base-200 py-4">
      <div className="card-body">
        <h2 className="card-title">
          <span className="">{title}</span>
          {showYears && (
            <span className="text-sm badge badge-outline badge-primary whitespace-nowrap mx-1">
              {years[0]} {years[1] ? "-" : ""}
            </span>
          )}
          {href !== "" && (
            <IconLink iconComponent={<ExtLink size={18} />} href={href} />
          )}
          {gitUrl && (
            <IconLink iconComponent={<Github size={18} />} href={gitUrl} />
          )}
        </h2>
        <div className="prose">
          <p>{description}</p>
          {tech && ( // If tech exist, render them
            <div className="flex flex-row">
              {tech.map((tag) => (
                <span className="badge badge-outline badge-secondary whitespace-nowrap mr-2">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectEntry;
