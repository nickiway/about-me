interface TechnologyListProps {
  technologies: string[];
}

const TechnologyList = ({ technologies }: TechnologyListProps) => {
  return (
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
  );
};

export default TechnologyList;
