import NavLinksList from "./NavLinksList";
import ThemeToggle from "../ThemeToggle";

interface NavResponsiveLayoutProps {
  isNavShowed: boolean;
  links: {
    isSocial?: boolean;
    path: string;
    label: string;
    icon?: React.FC;
  }[];
}

const NavResponsiveLayout = ({
  isNavShowed,
  links,
}: NavResponsiveLayoutProps) => {
  const routes = links.filter(({ isSocial }) => !isSocial);
  const socials = links.filter(({ isSocial }) => isSocial);

  return (
    isNavShowed && (
      <div className="nav-responsive-layout">
        <div className="h-4/5 flex items-center justify-center">
          <NavLinksList
            linkClassName="bitter uppercase"
            links={routes}
            className="flex flex-col"
            displayDataType="text"
          />
        </div>
        <div className="h-1/5 flex">
          <NavLinksList
            links={socials}
            className="flex h-full"
            linkClassName="cursor-pointer"
            displayDataType="icon"
            displayLabelOnHover={false}
          />

          <div className="flex flex-row-reverse flex-1">
            <ThemeToggle classNameList="p-10" />
          </div>
        </div>
      </div>
    )
  );
};

export default NavResponsiveLayout;
