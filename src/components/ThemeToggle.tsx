import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { value, setValue } = useContext(ThemeContext);

  const handleThemeChange = () => {
    value === "dark" ? setValue("light") : setValue("dark");
  };

  return (
    <button className="fixed top-5 right-10 " onClick={handleThemeChange}>
      <div className="w-10 h-10 dark:bg-lightBlue bg-darkBlue rounded-full flex items-center justify-center text-2xl">
        {value === "dark" ? "🌙" : "☀️"}
      </div>
    </button>
  );
};

export default ThemeToggle;
