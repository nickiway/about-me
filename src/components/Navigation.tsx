import { NavLink, Link } from "react-router-dom";
import { routes, socials } from "../data/navigation";

const Navigation = () => {
  const activeStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-darkBlue" : "";

  return (
    <header>
      <nav className="sticky top-0 h-screen px-10 py-5">
        <ul className="h-3/4 flex flex-col">
          <div className="text-6xl">S</div>
          {routes.map(({ path, label }) => (
            <li
              key={path}
              style={{ writingMode: "vertical-rl" }}
              className="py-5 rotate-180 flex"
            >
              <NavLink className={activeStyle} to={path}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="h-1/4 flex flex-col flex-col-reverse">
          {socials.map(({ icon, path }) => (
            <li key={path} className="my-3">
              <Link target="blank" to={path}>
                <div className="flex justify-center" key={path}>
                  {icon}
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
