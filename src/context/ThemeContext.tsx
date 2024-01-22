import { createContext } from "react";

interface IThemeContext {
  value: string;
  setValue: (value: string) => void;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
