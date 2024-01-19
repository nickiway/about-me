import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

export const routes = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

export const socials = [
  {
    icon: <GitHub />,
    path: "https://github.com/nickiway",
  } as const,
  {
    icon: <LinkedIn />,
    path: "https://www.linkedin.com/in/nickiway/",
  } as const,
  {
    icon: <Instagram style={{ height: "24px" }} />,
    path: "https://www.instagram.com/nickiway/",
  } as const,
];
