import { FC } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import { ThemeContext } from "../context/ThemeContext";
import Navigation from "./Navigation";

interface WrapperLayoutProps {
  children: React.ReactNode;
}

const WrapperLayout: FC<WrapperLayoutProps> = ({ children }) => {
  const [value, setValue] = useLocalStorage("theme", "dark");

  return (
    <ThemeContext.Provider value={{ value, setValue }}>
      <div className={value}>
        <div className="layer-content">
          <header>
            <Navigation />
          </header>

          <main className="flex-1">{children}</main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default WrapperLayout;
