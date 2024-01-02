import Link from "@/_components/link";
import ProjectEntry from "@/_components/entry/project-entry";

import type { Project } from "@/lib/types";

type Props = {
  count: number;
  projects: Project[];
  showYears: boolean;
};

const ProjectList = ({
  count = -1,
  projects = [],
  showYears = true,
}: Props) => {
  const sliced = projects.slice(0, count > 0 ? count : projects.length);
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
          />
        );
      })}
      {count > 0 && count < projects.length && (
        <li>
          See some more on <Link href="/projects"> this page</Link>
        </li>
      )}
    </ul>
  );
};

export default ProjectList;
