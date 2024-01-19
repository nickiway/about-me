import { NavLink } from "react-router-dom";
import { routes } from "../data/navigation";

const Navigation = () => {
  return (
    <header className="mb-10">
      <nav>
        <ul>
          <div className="">NS</div>
          {routes.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                className={({ isActive }) => (isActive ? "text-darkBlue" : "")}
                to={path}
              >
                <h1 key={path}>{label}</h1>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>

    // <header>
    //   <nav className="container mx-auto text-white font-bold">
    //     <ul className="lg:flex lg:justify-center lg:space-x-10 text-l">
    //       {routes.map(({ path, label }) => (
    //         <li key={path} className="text-center">
    //           <NavLink
    //             className={({ isActive }) => (isActive ? "text-darkBlue" : "")}
    //             to={path}
    //           >
    //             <h1 key={path}>{label}</h1>
    //           </NavLink>
    //         </li>
    //       ))}
    //     </ul>
    //   </nav>
    // </header>
  );
};

export default Navigation;
