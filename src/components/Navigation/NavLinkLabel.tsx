const NavLinkLabel = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return <div className={className}>{label}</div>;
};

export default NavLinkLabel;
