import { useState } from "react";

import classNames from "classnames";

import classes from "./styles.module.scss";
import userIcon from "../../../../assets/images/side-menu/user/user-photo.svg";
import arrowIcon from "../../../../assets/images/side-menu/user/arrow.svg";

export default function User() {
  const [isListOpened, setIsListOpened] = useState(false);

  const handleClickOnUser = () => {
    setIsListOpened((prev) => !prev);
  };

  return (
    <div className={classes.User}>
      <img className={classes.picture} src={userIcon} alt="user picture" />
      <div className={classes.container} onClick={handleClickOnUser}>
        <div className={classes.info}>
          <p className={classes.name}>Evano</p>
          <p className={classes.position}>Project Manager</p>
        </div>
        <img
          src={arrowIcon}
          alt="arrow"
          className={classNames(classes.arrow, {
            [classes.opened]: isListOpened,
          })}
        />
      </div>
    </div>
  );
}
