import { FC } from "react";

import NavLinksList from "./NavLinksList";
import ThemeToggle from "../ThemeToggle";

interface ScreenMenuProps {
  links: {
    path: string;
    label: string;
    icon?: FC;
  }[];
}

const LargeScreenMenu: FC<ScreenMenuProps> = ({ links }) => {
  return (
    <div className="hidden lg:flex h-screen">
      <div className="h-full flex flex-col">
        <NavLinksList className="h-3/4" links={links} displayDataType="icon" />

        <div className="h-1/4 flex flex-col-reverse">
          <ThemeToggle classNameList="py-5" />
        </div>
      </div>
    </div>
  );
};

export default LargeScreenMenu;
