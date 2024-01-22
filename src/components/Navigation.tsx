import { NavLink, Link } from "react-router-dom";
import NavigationData from "../data/navigation";

const Navigation = () => {
  const { routes, socials } = NavigationData;

  // active style handler
  const activeStyle = (
    classNameList: string | undefined,
    activeClassName: string | undefined,
    isActive: boolean
  ) => {
    return isActive
      ? [classNameList, activeClassName].join(" ")
      : classNameList;
  };

  return (
    <header>
      <nav className="sticky top-0 h-screen px-10 py-10">
        <ul className="h-3/4 flex flex-col">
          {routes.map(({ path, label, classNameList, activeClassName }) => (
            <li key={path}>
              <NavLink
                className={({ isActive }) =>
                  activeStyle(classNameList, activeClassName, isActive)
                }
                to={path}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="h-1/4 flex flex-col flex-col-reverse">
          {socials.map(({ icon: IconComponent, path }) => (
            <li key={path} className="py-3">
              <Link target="blank" to={path}>
                {IconComponent && <IconComponent style={{ height: "24px" }} />}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
