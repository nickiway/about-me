import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const Links = {
  routes: [
    {
      path: "/",
      label: "S",
      classNameList: "text-6xl bitter",
    },
    {
      path: "about",
      label: "About",
      classNameList: "py-5 rotate-180 flex [writing-mode:vertical-lr]",
      activeClassName: "text-lightBlue",
    },
    {
      path: "contact",
      label: "Contact",
      classNameList: "py-5 rotate-180 flex [writing-mode:vertical-lr]",
      activeClassName: "text-lightBlue",
    },
  ],
  socials: [
    {
      icon: GitHub,
      path: "https://github.com/nickiway",
    },
    {
      icon: LinkedIn,
      path: "https://www.linkedin.com/in/nickiway/",
    },
    {
      icon: Instagram,
      path: "https://www.instagram.com/nickiway_/",
      classNameList: "[height:24px]",
    },
  ],
};

export default Links;
