import { Link } from "react-router-dom";

import React from "react";
import Separator from "./Separator";

interface ProjectCardProps {
  index: number;
  project: {
    name: string;
    description: string;
    technologies: string[];
    githubLink: string;
    image: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { name, description, technologies, githubLink, image } = project;

  const handleIndex = () => {
    if (index < 10 && index > 0) {
      return `0${index}`;
    }
    return index;
  };

  return (
    <div className="flex justify-center my-10" id="test">
      <div className="container grid grid-cols-2 ">
        <div className="wrapper pl-[10%]">
          <div className="flex py-5">
            <Separator />
            <p className="dark:text-white px-5">{handleIndex()}</p>
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
        <div className="wrapper">
          <img src={image} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
