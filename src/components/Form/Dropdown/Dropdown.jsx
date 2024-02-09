import { useRef, useState } from "react";
import classes from "./styles.module.scss";
import classNames from "classnames";

import arrowIcon from "../../../assets/images/customers/table/arrow-down.svg";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

export default function Dropdown({
  value,
  setValue,
  options,
  backgroundColor,
  width,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false);

  const dropdownRef = useRef(null);

  useOnClickOutside(dropdownRef, () => {
    setIsFocused(false);
    setIsListVisible(false);
  });

  const handleClickOnDropdown = () => {
    if (isListVisible) {
      setIsFocused(false);
      setIsListVisible(false);

      return;
    }

    setIsFocused(true);
    setIsListVisible(true);
  };

  return (
    <div
      ref={dropdownRef}
      className={classNames(classes.Dropdown, {
        [classes.focused]: isFocused,
      })}
      style={{ backgroundColor, width }}
      onClick={handleClickOnDropdown}
      tabIndex={0}
      role="listbox"
    >
      <div className={classes.container}>
        <span className={classes.value}>
          {" "}
          <span className={classes.label}>Sort by : </span>
          {value.label}
        </span>
        <img src={arrowIcon} alt="dropdown" />
      </div>
      {isListVisible && (
        <ul className={classes.list}>
          {options.map((option) => (
            <li
              key={option.label}
              onClick={() => setValue(option)}
              className={classNames({ [classes.active]: option.label === value.label })}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
