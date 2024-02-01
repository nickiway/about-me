import AboutTextSection from "../components/About/AboutTextSection";
import AboutImageSection from "../components/About/AboutImageSection";
import AboutContainer from "../components/About/AboutContainer";

import { paragraphs } from "../data/about";
import me from "../assets/images/me.jpg";

const AboutPage = () => {
  return (
    <AboutContainer>
      <AboutTextSection paragraphs={paragraphs} />
      <AboutImageSection image={me} alt={"The image of author"} />
    </AboutContainer>
  );
};

export default AboutPage;
