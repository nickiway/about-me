import { Link } from "react-router-dom";

import Separator from "../Separator";
import TechnologyList from "./TechnologyList";

interface ProjectTextSectionProps {
  data: {
    elementIndex: string;
    description: string;
    githubLink: string;
    link: string;
    name: string;
    technologies: string[];
  };
}
const ProjectTextSection = ({ data }: ProjectTextSectionProps) => {
  const { elementIndex, description, githubLink, link, name, technologies } =
    data;

  return (
    <div>
      <div className="flex py-2">
        <Separator />
        <p className="px-5">{elementIndex}</p>
      </div>

      <p className="py-2 text-2xl">{name}</p>
      <p className="py-2 text-gray-400">{description}</p>

      <div className="my-5">
        <TechnologyList technologies={technologies} />
      </div>

      <div className="py-5">
        <Link to={githubLink}>
          <button className="bg-lightBlue rounded-full px-5 py-2 text-white mr-5 mb-5">
            View Code {"->"}
          </button>
        </Link>

        <Link to={link}>
          <button className="bg-lightBlue rounded-full px-5 py-2 text-white mr-5 mb-5">
            Live version {"->"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectTextSection;
