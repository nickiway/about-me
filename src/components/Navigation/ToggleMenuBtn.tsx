import { Menu } from "@mui/icons-material";

interface NavToggleMenuBtnProps {
  setNavShowed: () => void;
}

const NavToggleMenuBtn = ({ setNavShowed }: NavToggleMenuBtnProps) => {
  return (
    <button
      onClick={setNavShowed}
      className="m-5 p-2 cursor-pointer rounded-full bg-slate-100 dark:bg-slate-900"
    >
      <Menu fontSize="large" />
    </button>
  );
};

export default NavToggleMenuBtn;
