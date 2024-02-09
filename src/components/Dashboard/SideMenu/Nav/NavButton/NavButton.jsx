import { NavLink } from "react-router-dom";

import arrowIcon from "../../../../../assets/images/side-menu/arrow.svg";
import activeArrowIcon from "../../../../../assets/images/side-menu/arrow-active.svg";

import classes from "./styles.module.scss";
import classNames from "classnames";

export default function NavButton({
  label,
  path,
  isActive,
  icon,
  iconActive,
  subMenu,
}) {
  let currentIcon = icon;

  if (isActive) {
    currentIcon = iconActive;
  }

  return (
    <li
      className={classNames(classes.NavButton, {
        [classes.isActive]: isActive,
      })}
    >
      <NavLink to={path}>
        <div className={classes.iconContainer}>
          <img className={classes.icon} src={currentIcon} alt={label} />
        </div>
        <span>{label}</span>
        {subMenu && (
          <img
            src={isActive ? activeArrowIcon : arrowIcon}
            alt="arrow"
            className={classes.arrow}
          />
        )}
      </NavLink>
    </li>
  );
}
