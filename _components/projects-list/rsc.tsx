import getProjects from "@/lib/get-projects";
import ProjectList from ".";
import type { Project } from "@/lib/types";

export async function ProjectListRSC({
  displayCount,
  showYears,
}: {
  displayCount?: number;
  showYears?: boolean;
}) {
  const projects = await getProjects();
  const validProjects: Project[] = projects
    .filter((project): project is Project => project !== null)
    // filter for only projects that have href or gitUrl
    .filter((project) => project.href || project.gitUrl)
    // sort by descending start year
    .sort((a, b) => parseInt(b.years[0]) - parseInt(a.years[0]));

  return (
    <ProjectList
      projects={validProjects}
      count={displayCount}
      showYears={showYears ?? false}
    />
  );
}
