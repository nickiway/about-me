import { FC } from "react";
import { Link, NavLink } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

interface ScreenMenuProps {
  routes: {
    path: string;
    label: string;
  }[];
  socials: {
    icon: FC<{ style?: React.CSSProperties }>;
    path: string;
  }[];
}

const LargeScreenMenu: FC<ScreenMenuProps> = ({ routes, socials }) => {
  return (
    <div className="hidden lg:block h-full">
      <ThemeToggle classNameList="fixed top-10 right-10" />
      <ul className="h-3/4 flex flex-col">
        {routes.map(({ path, label }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `py-5 rotate-180 flex [writing-mode:vertical-lr] ${
                  isActive ? "text-lightBlue" : ""
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="h-1/4 flex flex-col flex-col-reverse">
        {socials.map(({ icon: IconComponent, path }) => (
          <li key={path} className="py-3">
            <Link target="blank" to={path}>
              {IconComponent && <IconComponent style={{ height: "24px" }} />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LargeScreenMenu;
