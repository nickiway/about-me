import { NavLink, Link } from "react-router-dom";
import Nav from "../data/navigation";
import { Icon } from "@mui/material";

const Navigation = () => {
  const { routes, socials } = Nav;

  // active style handler
  const activeStyle = (
    classNameList: string | undefined,
    activeClassName: string | undefined,
    isActive: boolean
  ) => {
    return isActive
      ? [activeClassName, classNameList].join(" ")
      : classNameList;
  };

  return (
    <header>
      <nav className="sticky top-0 h-screen px-10 py-5">
        <ul className="h-3/4 flex flex-col">
          {routes.map(
            ({ path, label, classNameList, styles, activeClassName }) => (
              <li key={path}>
                <div>
                  <NavLink
                    style={styles as React.CSSProperties}
                    className={({ isActive }) =>
                      activeStyle(classNameList, activeClassName, isActive)
                    }
                    to={path}
                  >
                    {label}
                  </NavLink>
                </div>
              </li>
            )
          )}
        </ul>
        <ul className="h-1/4 flex flex-col flex-col-reverse">
          {socials.map(({ icon: IconComponent, path, style }) => (
            <li key={path} className="my-3">
              <Link target="blank" to={path}>
                <div className="flex justify-center" key={path}>
                  {IconComponent && <IconComponent style={style} />}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
