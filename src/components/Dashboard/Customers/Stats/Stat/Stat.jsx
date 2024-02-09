import { useMemo } from "react";
import classes from "./styles.module.scss";

import greenArrowIcon from "../../../../../assets/images/customers/stats/green-arrow.svg";
import redArrowIcon from "../../../../../assets/images/customers/stats/red-arrow.svg";

export default function Stat({ label, icon, type, typeData, value }) {
  const typeField = useMemo(() => {
    switch (type) {
      case "percentageUp":
        return (
          <>
            <img src={greenArrowIcon} alt="increasing" />
            <p>
              <span style={{ color: "#00AC4F", fontWeight: 700 }}>
                {typeData}
              </span>{" "}
              this month
            </p>
          </>
        );
      case "percentageDown":
        return (
          <>
            <img src={redArrowIcon} alt="decreasing" />
            <p>
              <span style={{ color: "#D0004B", fontWeight: 700 }}>
                {typeData}
              </span>{" "}
              this month
            </p>
          </>
        );
      case "icons":
        return (
          <ul className={classes.users}>
            {typeData.map((user) => (
              <li key={user.name}>
                <img src={user.photo} alt="user" className={classes.user} />
              </li>
            ))}
          </ul>
        );
    }
  }, [type, typeData]);

  return (
    <li className={classes.Stat}>
      <img src={icon} alt={label} />
      <div className={classes.info}>
        <p className={classes.label}>{label}</p>
        <span className={classes.value}>{value}</span>
        <div className={classes.type}>{typeField}</div>
      </div>
    </li>
  );
}
