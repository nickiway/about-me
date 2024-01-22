import { FC } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectCardsListProps {
  projects: {
    name: string;
    description: string;
    technologies: string[];
    githubLink: string;
    image: string;
  }[];
}

const ProjectCardsList: FC<ProjectCardsListProps> = ({ projects }) => {
  return (
    <div>
      {projects.map((project, id) => (
        <ProjectCard key={id} project={project} index={id + 1} />
      ))}
    </div>
  );
};

export default ProjectCardsList;
