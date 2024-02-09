import classes from "./styles.module.scss";
import Nav from "./Nav/Nav";
import AccessPro from "./AccessPro/AccessPro";
import User from "./User/User";

import logoUrl from "../../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";

export default function SideMenu() {
  const hadAccess = false; // example of conditional rendering the access component

  const navigate = useNavigate();

  return (
    <div className={classes.SideMenu}>
      <nav>
        <div className={classes.logo} onClick={() => navigate("/dashboard")}>
          <img src={logoUrl} alt="Logo" />
          <span className={classes.dashboard}>Dashboard</span>
          <span className={classes.version}>v.01</span>
        </div>
        <Nav />
      </nav>
      <div className={classes.userContainer}>
        {!hadAccess && <AccessPro />}
        <User />
      </div>
    </div>
  );
}
