import { useContext, FC } from "react";
import { ThemeContext } from "../../context/ThemeContext";
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
      {value === "dark" ? <DarkMode /> : <LightMode />}
    </button>
  );
};

export default ThemeToggle;
