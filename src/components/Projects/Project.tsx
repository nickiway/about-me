import ProjectBody from "./ProjectBody";

import handlePorjectIndex from "../../util/handleProjectIndex";

interface ProjectProps {
  index: number;
  project: {
    name: string;
    description: string;
    technologies: string[];
    githubLink: string;
    link: string;
    image: string;
  };
  isLeft?: boolean;
}

const Project = ({ project, index, isLeft }: ProjectProps) => {
  const { image, ...textSectionData } = project;
  const elementIndex = handlePorjectIndex(index);

  return (
    <section
      className="lg:flex justify-center items-center my-10"
      id={elementIndex}
    >
      <ProjectBody
        isLeft={isLeft}
        image={image}
        name={project.name}
        textSectionData={{ ...textSectionData, elementIndex }}
      />
    </section>
  );
};

export default Project;
