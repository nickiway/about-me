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
    isSocial?: boolean;
  }[];
}

const SmallScreenMenu: FC<ScreenMenuProps> = ({ links }) => {
  const [navShowed, setNavShowed] = useState(false);

  const openMenu = () => {
    setNavShowed(!navShowed);
  };

  return (
    <div className="flex flex-row-reverse lg:hidden">
      <div className="fixed z-20">
        <button
          onClick={openMenu}
          className="m-5 p-2 rounded-full bg-slate-100 dark:bg-slate-900"
        >
          <Menu className="cursor-pointer" fontSize="large" />
        </button>
      </div>
      <div
        className={
          "fixed z-10 top-0 w-screen dark:bg-slate-950 bg-slate-100 opacity-95 h-screen  " +
          (navShowed ? "block" : "hidden")
        }
      >
        <div className="h-4/5 flex items-center justify-center">
          <ul>
            {links
              .filter(({ isSocial }) => !isSocial)
              .map(({ path, label }, index) => (
                <li
                  key={index}
                  className="flex justify-center pointer font-bold bitter"
                >
                  <NavLink to={path}>
                    <div className="p-5">
                      <span className="p-5 uppercase">{label}</span>
                    </div>
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
        <ul className="h-1/5 flex">
          {links
            .filter(({ isSocial }) => isSocial)
            .map(({ path, icon: IconComponent }, index) => (
              <li
                key={index}
                className="flex justify-center items-center pointer"
              >
                <NavLink to={path}>
                  <div className="p-5">
                    {IconComponent && <IconComponent />}
                  </div>
                </NavLink>
              </li>
            ))}

          <li className="flex flex-1 flex-row-reverse">
            <ThemeToggle classNameList="p-10" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SmallScreenMenu;
