import { NavLink } from "react-router-dom";

import AboutTextSection from "../components/AboutSection/AboutTextSection";
import AboutImageSection from "../components/AboutSection/AboutImageSection";

import { paragraphs } from "../data/about";
import { Send } from "@mui/icons-material";
import me from "../assets/images/me.jpg";

const AboutPage = () => {
  return (
    <div className="lg:flex ">
      <div className="lg:w-1/2">
        <AboutTextSection paragraphs={paragraphs} />
        <NavLink to={"../contact"} className="primary-btn mx-5">
          <Send />
          <span className="px-2">Contact Me</span>
        </NavLink>
      </div>

      <div className="lg:w-1/2 my-24 lg:h-1/2 ">
        <h1 className="section-title px-10">About Me</h1>
        <AboutImageSection image={me} alt={"The image of author"} />
      </div>
    </div>
  );
};

export default AboutPage;
