import { FC } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { ThemeContext } from "../context/ThemeContext";
import CopyRightAlert from "./CopyRightAlert";
import Navigation from "./Navigation";

interface WrapperLayoutProps {
  children: React.ReactNode;
}

const WrapperLayout: FC<WrapperLayoutProps> = ({ children }) => {
  const [value, setValue] = useLocalStorage("theme", "dark");

  return (
    <ThemeContext.Provider value={{ value, setValue }}>
      <div className={value}>
        <div className="min-h-screen dark:bg-secondary dark:text-white">
          <Navigation />

          {children}
          <CopyRightAlert />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default WrapperLayout;
