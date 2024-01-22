import ThemeToggle from "../components/ThemeToggle";
import IntroductionContainer from "../components/IntroductionContainer";
import ProjectCardsList from "../components/ProjectCardsList";
import CopyRightAlert from "../components/CopyRightAlert";

const Home = () => {
  // data for IntroductionContainer
  const authorData = {
    author: "Nick Shkitak",
    profession: "Frontend developer",
    lyrics: ["+ Designer", "+ Coder"],
  };

  const sample = {
    name: "Web portal Promptopia for AI prompts",
    description:
      "This project was created as a small pet project with a purpous of learning next js and tailwind css. It is a web portal for AI generated prompts. to be continued...",
    technologies: ["React", "TailwindCSS", "TypeScript"],
    image:
      "https://dlcdnwebimgs.asus.com/gain/b343cf33-4593-46b4-91ae-ce5f547572a2/",
    githubLink: "https://github.com/nickiway/promptopia-nextjs-app",
  };

  const projectsData = [sample, sample, sample, sample, sample, sample];

  return (
    <main className="flex-1">
      <ThemeToggle />
      <IntroductionContainer data={authorData} />
      <ProjectCardsList projects={projectsData} />
      <CopyRightAlert />
    </main>
  );
};

export default Home;
