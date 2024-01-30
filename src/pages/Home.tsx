import Hero from "../components/Hero";
import ProjectList from "../components/Projects/ProjectList";

import projectsData from "../data/projects";
import heroData from "../data/hero";

const Home = () => {
  return (
    <>
      <Hero data={heroData} />
      <ProjectList projects={projectsData} />
    </>
  );
};

export default Home;
