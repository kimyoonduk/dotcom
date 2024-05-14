import Link from "@/_components/link";
import ProjectEntry from "@/_components/entry/project-entry";

import type { Project } from "@/lib/types";

type Props = {
  projects: Project[];
  showYears: boolean;
  count?: number | undefined;
};

const ProjectList = ({
  projects = [],
  showYears = true,
  count = -1,
}: Props) => {
  const sliced = projects.slice(0, count ?? projects.length);
  sliced.sort((a, b) => parseInt(b.years[0]) - parseInt(a.years[0]));

  return (
    <ul className="">
      {sliced.map((e) => {
        return (
          <ProjectEntry
            showYears={showYears}
            years={e.years}
            key={e.title}
            href={e.href}
            title={e.title}
            description={e.description}
            role={e.role}
            stars={e.stars}
            gitUrl={e.gitUrl}
            tech={e.tech}
          />
        );
      })}
    </ul>
  );
};

export default ProjectList;
