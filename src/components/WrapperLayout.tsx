import { FC } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { ThemeContext } from "../context/ThemeContext";

import Navigation from "./Navigation/Navigation";
import Copyright from "./Copyright";

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

          <main className="flex flex-1 justify-center">
            <article className="container">
              {children}
              <Copyright />
            </article>
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default WrapperLayout;
