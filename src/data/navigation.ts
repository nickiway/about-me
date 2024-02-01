import {
  GitHub,
  Instagram,
  LinkedIn,
  Face,
  Mail,
  Home,
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
    // {
    //   icon: RocketLaunch,
    //   label: "Details",
    //   path: "details",
    // },
    {
      icon: GitHub,
      label: "GitHub",
      path: "https://github.com/nickiway",
      isSocial: true,
    },
    {
      icon: LinkedIn,
      label: "LinkedIn",
      path: "https://www.linkedin.com/in/nickiway/",
      isSocial: true,
    },
    {
      icon: Instagram,
      label: "Instagram",
      path: "https://www.instagram.com/nickiway_/",
      isSocial: true,
    },
  ],
};

export default Links;
