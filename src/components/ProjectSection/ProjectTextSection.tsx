import Separator from "../Separator";
import { Link } from "react-router-dom";

interface ProjectTextSectionProps {
  elementIndex: string;
  description: string;
  githubLink: string;
  name: string;
  technologies: string[];
}
const ProjectTextSection = ({
  elementIndex,
  description,
  githubLink,
  name,
  technologies,
}: ProjectTextSectionProps) => {
  return (
    // <div className={"wrapper " + (isLeft ? "pr-[10%]" : "pl-[10%]")}>
    <div className={"wrapper " + "pr-[10%]"}>
      <div className="flex py-5">
        <Separator />
        <p className="dark:text-white px-5">{elementIndex}</p>
      </div>

      <div className="my-5">
        <h1 className="text-4xl">{name}</h1>
      </div>

      <div className="my-5">
        <p className="text-gray-400">{description}</p>
      </div>

      <div className="my-5">
        <ul className="flex flex-wrap">
          {technologies.map((technology, id) => (
            <li
              key={id}
              className="bg-darkBlue rounded-full px-5 py-2 text-white mr-5 mb-5"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <div className="my-5">
        <Link to={githubLink}>
          <button className="bg-lightBlue rounded-full px-5 py-2 text-white mr-5 mb-5">
            View Code {"->"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectTextSection;
