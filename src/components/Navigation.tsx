import LargeScreenMenu from "./LargeScreenMenu";
import NavigationData from "../data/navigation";
import SmallScreenMenu from "./SmallScreenMenu";

const Navigation = () => {
  const { links } = NavigationData;

  return (
    <nav>
      {/* Large screens */}
      <LargeScreenMenu links={links} />

      {/* Small screens */}
      <SmallScreenMenu links={links} />
    </nav>
  );
};

export default Navigation;
