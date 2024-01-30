import ProjectTextSection from "./ProjectTextSection";

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
  const { name, description, technologies, githubLink, image } = project;
  const elementIndex = handleIndex(index);

  return (
    <section className="flex justify-center my-10" id={elementIndex}>
      <div
        className={"container md:flex " + (isLeft ? "" : "flex-row-reverse")}
      >
        <div className="wrapper w-full">
          <img src={image} alt={name} />
        </div>

        <ProjectTextSection
          elementIndex={elementIndex}
          description={description}
          githubLink={githubLink}
          name={name}
          technologies={technologies}
        />
      </div>
    </section>
  );
};

export default Project;
