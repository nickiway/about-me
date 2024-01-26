import { useContext, FC } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { DarkMode, LightMode } from "@mui/icons-material";

interface ThemeToggleProps {
  classNameList?: string;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ classNameList }) => {
  const { value, setValue } = useContext(ThemeContext);

  const handleThemeChange = () => {
    value === "dark" ? setValue("light") : setValue("dark");
  };

  return (
    <button className={classNameList} onClick={handleThemeChange}>
      <div className="w-10 h-10 dark:bg-lightBlue bg-darkBlue text-white rounded-full flex items-center justify-center text-2xl">
        {value === "dark" ? <DarkMode /> : <LightMode />}
      </div>
    </button>
  );
};

export default ThemeToggle;
