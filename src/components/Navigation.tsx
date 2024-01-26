import { Link } from "react-router-dom";

import LargeScreenMenu from "./LargeScreenMenu";

import NavigationData from "../data/navigation";
import SmallScreenMenu from "./SmallScreenMenu";

const Navigation = () => {
  const { routes, socials } = NavigationData;

  return (
    <header>
      <nav className="fixed top-0 flex flex-col h-screen px-10 py-10">
        <Link className="fixed lg:static z-30 text-6xl bitter" to="/">
          S
        </Link>

        {/* Small screens */}
        <SmallScreenMenu routes={routes} socials={socials} />

        {/* Large screens */}
        <LargeScreenMenu routes={routes} socials={socials} />
      </nav>
    </header>
  );
};

export default Navigation;
