import { FC } from "react";

import { NavLink } from "react-router-dom";

import { useBoolean } from "../../hooks/useBoolean";

import ThemeToggle from "../ThemeToggle";
import ToggleMenuBtn from "./ToggleMenuBtn";

interface ScreenMenuProps {
  links: {
    path: string;
    label: string;
    icon?: FC;
    isSocial?: boolean;
  }[];
}

const SmallScreenMenu: FC<ScreenMenuProps> = ({ links }) => {
  const [isNavShowed, { setToggle: setNavShowed }] = useBoolean(false);

  return (
    <div className="flex lg:hidden">
      <div className="fixed z-20 right-0">
        <ToggleMenuBtn setNavShowed={setNavShowed} />
      </div>
    </div>
  );
};
export default SmallScreenMenu;
