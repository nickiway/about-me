import ProjectTextSection from "./ProjectBodyText";
import ProjectImage from "./ProjectBodyImage";

interface ProjectBodyProps {
  isLeft: boolean | undefined;
  image: string;
  name: string;
  textSectionData: {
    elementIndex: string;
    description: string;
    githubLink: string;
    name: string;
    technologies: string[];
  };
}
const ProjectBody = ({
  isLeft,
  image,
  name,
  textSectionData,
}: ProjectBodyProps) => {
  const array = [
    <ProjectImage image={image} name={name} />,
    <ProjectTextSection data={textSectionData} />,
  ];

  const renderOrder = isLeft ? array : array.reverse();

  return (
    <>
      {renderOrder.map((element, id) => (
        <div key={id} className="w-full">
          {element}
        </div>
      ))}
    </>
  );
};

export default ProjectBody;
