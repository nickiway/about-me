import {
  GitHub,
  Instagram,
  LinkedIn,
  Face,
  Mail,
  Home,
  RocketLaunch,
} from "@mui/icons-material";

const Links = {
  links: [
    {
      icon: Home,
      label: "Home",
      path: "/",
    },
    {
      icon: Face,
      label: "About",
      path: "about",
    },
    {
      icon: Mail,
      label: "Contact",
      path: "contact",
    },
    {
      icon: RocketLaunch,
      label: "My Projects",
      path: "projects",
    },
    {
      icon: GitHub,
      label: "GitHub",
      path: "https://github.com/nickiway",
    },
    {
      icon: LinkedIn,
      label: "LinkedIn",
      path: "https://www.linkedin.com/in/nickiway/",
    },
    {
      icon: Instagram,
      label: "Instagram",
      path: "https://www.instagram.com/nickiway_/",
    },
    // {
    //   icon: undefined,
    //   label: "Resume",
    //   path: "/",
    // },
    // {
    //   icon: undefined,
    //   label: "Articles",
    //   path: "/",
    // },
  ],
};

export default Links;
