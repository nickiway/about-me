import MyNavLink from "./NavLink";

interface NavLinksListProps {
  links: {
    path: string;
    label: string;
    icon?: React.FC;
  }[];
  linkClassName?: string;
  className?: string;
  displayDataType: "icon" | "text";
  displayLabelOnHover?: boolean;
}

const NavLinksList = ({
  links,
  className,
  linkClassName,
  displayDataType,
  displayLabelOnHover,
}: NavLinksListProps) => {
  return (
    <ul className={className}>
      {links.map(({ path, label, icon: IconComponent }, index) => (
        <MyNavLink
          key={index}
          path={path}
          label={label}
          displayLabelOnHover={displayLabelOnHover}
          stylingClasses={linkClassName}
          IconComponent={IconComponent}
          displayDataType={displayDataType}
        />
      ))}
    </ul>
  );
};

export default NavLinksList;
