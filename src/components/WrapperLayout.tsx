import { FC } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { ThemeContext } from "../context/ThemeContext";

interface WrapperLayoutProps {
  children: React.ReactNode;
}

const WrapperLayout: FC<WrapperLayoutProps> = ({ children }) => {
  const [value, setValue] = useLocalStorage("theme", "dark");

  return (
    <ThemeContext.Provider value={{ value, setValue }}>
      <div className={value}>
        <div className="md:flex dark:bg-secondary dark:text-white">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default WrapperLayout;
