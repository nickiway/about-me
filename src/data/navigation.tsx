import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const Links = {
  routes: [
    {
      path: "/",
      label: "S",
      classNameList: "text-6xl font-bold",
    },
    {
      path: "projects",
      label: "Projects",
      classNameList: "py-5 rotate-180 flex",
      styles: { writingMode: "vertical-rl" },
      activeClassName: "text-primary",
    },
    {
      path: "about",
      label: "About",
      classNameList: "py-5 rotate-180 flex",
      styles: { writingMode: "vertical-rl" },
      activeClassName: "text-primary",
    },
    {
      path: "contact",
      label: "Contact",
      classNameList: "py-5 rotate-180 flex",
      styles: { writingMode: "vertical-rl" },
      activeClassName: "text-primary",
    },
  ],
  socials: [
    {
      icon: GitHub,
      path: "https://github.com/nickiway",
      style: {
        height: "24px",
      } as React.CSSProperties,
    },
    {
      icon: LinkedIn,
      path: "https://www.linkedin.com/in/nickiway/",
      style: {
        height: "24px",
      } as React.CSSProperties,
    },
    {
      icon: Instagram,
      path: "https://www.instagram.com/nickiway_/",
      style: {
        height: "24px",
      } as React.CSSProperties,
    },
  ],
};

export default Links;
