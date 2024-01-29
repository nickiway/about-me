import MyNavLink from "./NavLink";

interface NavLinksListProps {
  links: {
    path: string;
    label: string;
    icon?: React.FC;
  }[];
  className?: string;
}

const NavLinksList = ({ links, className }: NavLinksListProps) => {
  return (
    <ul className={className}>
      {links.map(({ path, label, icon: IconComponent }, index) => (
        <MyNavLink
          key={index}
          path={path}
          label={label}
          IconComponent={IconComponent}
        />
      ))}
    </ul>
  );
};

export default NavLinksList;
