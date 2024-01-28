import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Help } from "@mui/icons-material";

import ThemeToggle from "./ThemeToggle";

interface ScreenMenuProps {
  links: {
    path: string;
    label: string;
    icon?: FC;
  }[];
}

const LargeScreenMenu: FC<ScreenMenuProps> = ({ links }) => {
  return (
    <div className="hidden md:flex h-screen">
      <div className="h-full flex flex-col">
        <ul className="h-2/3">
          {links.map(({ path, label, icon: IconComponent }, index) => (
            <li key={index} className="flex items-center justify-center">
              <NavLink to={path}>
                <div className="p-5">
                  {IconComponent ? <IconComponent /> : label}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="h-1/3 flex flex-col flex-col-reverse">
          <div className="flex justify-center p-3">
            <ThemeToggle />
          </div>
          <div className="flex justify-center p-3">
            <Help />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeScreenMenu;
