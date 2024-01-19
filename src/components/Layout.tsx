import { FC } from "react";

interface ILayout {
  children: React.ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return <div className="md:flex">{children}</div>;
};

export default Layout;
