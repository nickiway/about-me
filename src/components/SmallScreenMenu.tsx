import { FC } from "react";
import { useState } from "react";

import { NavLink } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import ThemeToggle from "./ThemeToggle";

interface ScreenMenuProps {
  links: {
    path: string;
    label: string;
    icon?: FC;
  }[];
}

const SmallScreenMenu: FC<ScreenMenuProps> = ({ links }) => {
  const [navShowed, setNavShowed] = useState(false);

  const openMenu = () => {
    setNavShowed(!navShowed);
  };

  return (
    <div className="flex flex-row-reverse md:hidden">
      <button
        onClick={openMenu}
        className="m-5 p-2 rounded-full bg-slate-100 dark:bg-slate-900"
      >
        <Menu className="cursor-pointer" fontSize="large" />
      </button>

      <div
        className={
          "fixed z-20 top-0 w-screen bg-slate-950 opacity-90 h-full  " +
          (navShowed ? "block" : "hidden")
        }
      >
        <button
          onClick={openMenu}
          className="m-5 p-2 rounded-full bg-slate-100 dark:bg-slate-900"
        >
          <Menu className="cursor-pointer" fontSize="large" />
        </button>

        <ul className="">
          <li className="flex justify-center">
            <ThemeToggle />
          </li>

          {links.map(({ path, label, icon: IconComponent }, index) => (
            <li key={index} className="flex justify-center">
              <NavLink to={path}>
                <div className="p-5">
                  {IconComponent && <IconComponent />}
                  {label}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SmallScreenMenu;
