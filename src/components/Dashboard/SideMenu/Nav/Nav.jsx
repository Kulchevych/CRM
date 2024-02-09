import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import NavButton from "./NavButton/NavButton";

import classes from "./styles.module.scss";

import dashboard from "../../../../assets/images/side-menu/dashboard.svg";
import dashboardHover from "../../../../assets/images/side-menu/dashboard.svg";
import dashboardActive from "../../../../assets/images/side-menu/dashboard.svg";

import product from "../../../../assets/images/side-menu/product.svg";
import productHover from "../../../../assets/images/side-menu/product-active.svg";
import productActive from "../../../../assets/images/side-menu/product-active.svg";

import customers from "../../../../assets/images/side-menu/customers.svg";
import customersHover from "../../../../assets/images/side-menu/customers-active.svg";
import customersActive from "../../../../assets/images/side-menu/customers-active.svg";

import income from "../../../../assets/images/side-menu/income.svg";
import incomeHover from "../../../../assets/images/side-menu/income.svg";
import incomeActive from "../../../../assets/images/side-menu/income.svg";

import promote from "../../../../assets/images/side-menu/promote.svg";
import promoteHover from "../../../../assets/images/side-menu/promote-active.svg";
import promoteActive from "../../../../assets/images/side-menu/promote-active.svg";

import help from "../../../../assets/images/side-menu/help.svg";
import helpHover from "../../../../assets/images/side-menu/help-active.svg";
import helpActive from "../../../../assets/images/side-menu/help-active.svg";

export default function Nav() {
  const location = useLocation();

  const links = useMemo(
    () => [
      {
        path: "/dashboard",
        label: "Dashboard",
        icon: dashboard,
        iconHover: dashboardHover,
        iconActive: dashboardActive,
        subMenu: false,
      },
      {
        path: "/product",
        label: "Product",
        icon: product,
        iconHover: productHover,
        iconActive: productActive,
        subMenu: true,
      },
      {
        path: "/customers",
        label: "Customers",
        icon: customers,
        iconHover: customersHover,
        iconActive: customersActive,
        subMenu: true,
      },
      {
        path: "/income",
        label: "Income",
        icon: income,
        iconHover: incomeHover,
        iconActive: incomeActive,
        subMenu: true,
      },
      {
        path: "/promote",
        label: "Promote",
        icon: promote,
        iconHover: promoteHover,
        iconActive: promoteActive,
        subMenu: true,
      },
      {
        path: "/help",
        label: "Help",
        icon: help,
        iconHover: helpHover,
        iconActive: helpActive,
        subMenu: true,
      },
    ],
    []
  );

  return (
    <ul className={classes.Nav}>
      {links.map((link) => (
        <NavButton
          key={link.label}
          label={link.label}
          path={link.path}
          isActive={location.pathname.includes(link.path)}
          icon={link.icon}
          iconHover={link.iconHover}
          iconActive={link.iconActive}
          subMenu={link.subMenu}
        />
      ))}
    </ul>
  );
}
