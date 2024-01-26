import { FC } from "react";
import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { Menu } from "@mui/icons-material";
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

const SmallScreenMenu: FC<ScreenMenuProps> = ({ routes, socials }) => {
  const [navShowed, setNavShowed] = useState(false);

  const isShowMenu = navShowed ? "block" : "hidden";

  const openMenu = () => {
    setNavShowed(!navShowed);
  };

  return (
    <div className="block lg:hidden">
      <button onClick={openMenu} className="z-30 fixed right-0">
        <Menu className="cursor-pointer" fontSize="large" />
      </button>

      <div
        className={
          "w-screen p-52 h-screen fixed z-20 opacity-90 bg-white dark:bg-slate-950 top-0 left-0 " +
          isShowMenu
        }
      >
        <ThemeToggle classNameList="fixed bottom-0 right-0 z-20" />

        <ul>
          {routes.map(({ path, label }) => (
            <li key={path}>
              <NavLink to={path}>{label}</NavLink>
            </li>
          ))}
        </ul>
        <ul>
          {socials.map(({ icon: IconComponent, path }) => (
            <li key={path} className="py-3">
              <Link target="blank" to={path}>
                {IconComponent && <IconComponent style={{ height: "24px" }} />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SmallScreenMenu;
