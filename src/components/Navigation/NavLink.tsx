import { NavLink } from "react-router-dom";

import { useBoolean } from "../../hooks/useBoolean";

import NavLinkLabel from "./NavLinkLabel";

interface NavLinkProps {
  path: string;
  label: string;
  displayLabelOnHover?: boolean;
  stylingClasses?: string;
  IconComponent?: React.FC;
  displayDataType: "icon" | "text";
}

const MyNavLink = ({
  path,
  IconComponent,
  label,
  stylingClasses,
  displayLabelOnHover,
  displayDataType,
}: NavLinkProps) => {
  const [hovered, { setTrue, setFalse }] = useBoolean(false);

  return (
    <li className="flex items-center justify-center">
      <NavLink
        onMouseEnter={setTrue}
        onMouseLeave={setFalse}
        className={({ isActive }) =>
          (isActive ? "dark:text-lightBlue text-secondary" : undefined) +
          " " +
          stylingClasses
        }
        to={path}
      >
        <div className="p-5">
          {IconComponent && displayDataType === "icon" ? (
            <IconComponent />
          ) : (
            label
          )}
        </div>
      </NavLink>

      {hovered && displayLabelOnHover && (
        <NavLinkLabel
          label={label}
          className="absolute bg-slate-100 dark:bg-slate-950 rounded-md p-1 text-xm  text-slate-900 dark:text-slate-100 left-20"
        />
      )}
    </li>
  );
};

export default MyNavLink;
