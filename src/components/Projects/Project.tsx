import ProjectBody from "./ProjectBody";

interface ProjectProps {
  index: number;
  project: {
    name: string;
    description: string;
    technologies: string[];
    githubLink: string;
    image: string;
  };
  isLeft?: boolean;
}

const handleIndex = (index: number): string =>
  index < 10 && index > 0 ? `0${index}` : index.toString();

const Project = ({ project, index, isLeft }: ProjectProps) => {
  const { image, ...textSectionData } = project;
  const elementIndex = handleIndex(index);

  return (
    <section className="flex justify-center my-10" id={elementIndex}>
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
