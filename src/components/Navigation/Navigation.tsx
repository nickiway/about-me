import NavigationData from "../../data/navigation";

import LargeScreenMenu from "./LargeScreenMenu";
import SmallScreenMenu from "./SmallScreenMenu";

const Navigation = () => {
  const { links } = NavigationData;

  return (
    <nav>
      <LargeScreenMenu links={links} />
      <SmallScreenMenu links={links} />
    </nav>
  );
};

export default Navigation;
