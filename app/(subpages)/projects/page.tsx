import ProjectList from "@/_components/projects-list";
import { getProjects } from "@/lib/get-projects";

export const metadata = {
  title: "Projects",
  description: "List of projects",
  alternates: {
    canonical: "https://kimyoonduk.com/projects",
  },
};

const Projects = async () => {
  const projects = await getProjects();

  return (
    <ProjectList showYears={true} count={projects.length} projects={projects} />
  );
};
export default Projects;
