import Project from "./Project";

interface ProjectListProps {
  projects: {
    name: string;
    description: string;
    technologies: string[];
    githubLink: string;
    image: string;
    link: string;
  }[];
}

const ProjectCardsList = ({ projects }: ProjectListProps) => {
  return (
    <div id="project-list">
      {projects.map((project, id) => (
        <Project
          key={id}
          project={project}
          index={id + 1}
          isLeft={id % 2 === 0 ? true : false}
        />
      ))}
    </div>
  );
};

export default ProjectCardsList;
